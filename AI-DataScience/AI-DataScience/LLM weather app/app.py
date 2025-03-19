import streamlit as st
import requests
import openai
import os
from dotenv import load_dotenv  
from datetime import datetime  

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

st.set_page_config(page_title="Weather App", page_icon="🌤️", layout="wide", initial_sidebar_state="expanded")

st.markdown(
    """
    <style>
    .stColumn > div {
        margin-right: 10px; 
    }
    .stButton > button {
        background-color: #4CAF50;
        color: white;
        border-radius: 5px;
        padding: 10px 20px;
        border: none;
        outline: none; /* Loại bỏ đường viền mặc định */
    }
    .stButton > button:hover {
        background-color: #4CAF50; /* Giữ nguyên màu nền khi hover */
        color: white; /* Giữ nguyên màu chữ khi hover */
        border: none;
    }
    .stButton > button:active {
        background-color: #4CAF50; /* Giữ nguyên màu nền khi click */
        color: white; /* Giữ nguyên màu chữ khi click */
        border: none;
    }
    .stButton > button:focus {
        background-color: #4CAF50; /* Giữ nguyên màu nền khi focus */
        color: white; /* Giữ nguyên màu chữ khi focus */
        border: none;
        outline: none; /* Loại bỏ đường viền khi focus */
    }
    </style>
    """,
    unsafe_allow_html=True
)


def get_weather(city, weather_api_key):
    base_url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={weather_api_key}"
    response = requests.get(base_url)
    data = response.json()
    return data



def generate_weather_description(data, open_api):
    openai.api_key = open_api
    try:
        temperature = data["main"]["temp"] - 273.15
        feels_like = data["main"]["feels_like"]
        pressure = data["main"]["pressure"]
        humidity = data["main"]["humidity"]
        description = data["weather"][0]["description"]
        prompt = f"The weather in {data['name']} is {description.lower()}. The temperature is {temperature:.1f}°C, but it feels like {feels_like:.1f}°C. The pressure is {pressure} hPa and the humidity is {humidity}%. Explaining this in simple way for a general audience."

        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[              
                {"role": "user", "content": prompt}
            ],
            max_tokens=100          
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"An error occurred: {e}"



def get_weakly_forecast(weather_api_key, lat, lon):
    base_url = f"http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={weather_api_key}"
    response = requests.get(base_url)
    data = response.json()
    return data


def display_weekly_forecast(data):
    try:
        st.write("===============================================")
        st.write("Weekly Forecast:")
        display_date = set()

        c1, c2, c3, c4 = st.columns(4)
        with c1:
            st.metric("", "Day")
        with c2:
            st.metric("", "Desc")
        with c3:
            st.metric("", "Min_Temp")
        with c4:
            st.metric("", "Max_Temp")

        for day in data["list"]:
            date = datetime.fromtimestamp(day["dt"]).strftime("%A, %B %d")
            if date not in display_date:
                display_date.add(date)

                with c1:
                    st.write(f"{date}")
                with c2:
                    st.write(f"{day['weather'][0]['description'].capitalize()}")
                with c3:
                    st.write(f"{day['main']['temp_min'] - 273.15:.1f}°C")
                with c4:
                    st.write(f"{day['main']['temp_max'] - 273.15:.1f}°C")

    except Exception as e:
        st.error(f"An error occurred: {e}")



def main():
    st.sidebar.image("332681f1-a765-4675-96a1-0b81f28b8416.jpg", width=100)
    st.sidebar.title("Weather forcast with LLM")
    city = st.sidebar.text_input("Enter the city name", "Da Nang")
    
    weather_api_key = "432c25f915430090f18e829c4a260fe7"
    api_open_key = openai.api_key
    submit_button = st.sidebar.button("Get Weather")

    if submit_button:
        st.title(f"Weather Information in {city}:")
        with st.spinner("Fetching Weather Data..."):
            weather_data = get_weather(city, weather_api_key)
            print(weather_data)

            if weather_data.get("cod") != 404:
                col1, col2, col3 = st.columns(3)
                with col1:
                    st.metric("Temperature 🌡️", f"{weather_data['main']['temp'] - 273.15:.1f}°C")
                    st.metric("Humidity 💦", f"{weather_data['main']['humidity']}%")
                with col2:
                    st.metric("Pressure 📈📉", f"{weather_data['main']['pressure']} hPa")
                    st.metric("Wind Speed 🍃", f"{weather_data['wind']['speed']} m/s")
                with col3:
                    st.metric("Feels Like", f"{weather_data['main']['feels_like'] - 273.15:.1f}°C")
  
                weather_description = generate_weather_description(weather_data, api_open_key)
                # st.write(f"Description: {weather_description}")
                st.markdown(
                    f'<span style="color: #1E90FF; font-size: 18px; font-weight: bold;">Description: {weather_description}</span>', 
                    unsafe_allow_html=True
                )

                forecast_data = get_weakly_forecast(weather_api_key, weather_data["coord"]["lat"], weather_data["coord"]["lon"])

                if forecast_data != "404":
                    display_weekly_forecast(forecast_data)
                else:
                    st.error("An error occurred while fetching the weekly forecast.")

            else:
                st.error("City Not Found")


if __name__ == "__main__":
    main()