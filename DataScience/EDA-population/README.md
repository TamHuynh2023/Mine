import sklearn
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

import numpy as np
import pandas as pd
import seaborn as sns
sns.set_style("whitegrid")
sns.despine()

import matplotlib.pyplot as plt

import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots

from jupyterthemes import get_themes
import jupyterthemes as jt
from jupyterthemes.stylefx import set_nb_theme
set_nb_theme('onedork')

//////////////////////////////////////////////////////////////////////////
df = pd.read_csv("world_population.csv")
df

print(f"Shape of DataFrame:\n {df.shape}")
print(df.columns.values)

for column in df.columns:
print(f"{column} ---> {df[column].nunique()}")
df.info()

df.describe().T.sort_values("50%", ascending = False).style.background_gradient(cmap = "RdPu")\
 .bar(subset = ["mean"], color = "red").bar(subset = ["max"], color = "green")

CHECK NAN:
for column in df.columns:
print(column)
print(f"{df[column].isnull().value_counts()}\n")

CHECK DUPLICATED DATA:
df.duplicated().sum()

DROP UNNECESSARY COLUMN AND RENAME COLUMN NAME:
df.drop("CCA3", axis = 1, inplace = True)
df.rename({"Country/Territory":"Country",
'2022 Population': 2022,
'2020 Population': 2020,
'2015 Population': 2015,
'2010 Population': 2010,
'2000 Population': 2000,
'1990 Population': 1990,
'1980 Population': 1980,
'1970 Population': 1970}, axis = 1, inplace = True)
df

DATA FORMATTING:
for column in df.columns[4:12]:
df[column] = df[column].astype(int)

DATA VISUALIZATION:

# Set a new column is "Density" to use hue for pairplot

bins = np.linspace(min(df[2022]), max(df[2022]), 3)
df["Density"] = pd.cut(df[2022], bins, labels = ["Low", "High"])

sns.pairplot(data = df, hue = "Density")

plt.tight_layout
plt.show()

<!-- //////////////////////////////////////////////////////////////////////// -->

2 COUNTRIES INDIA AND CHINA:
df_china_india = df.set_index("Country")
df_china_india = df_china_india.loc[["China", "India"],2022:1970]
df_china_india = df_china_india.transpose()
df_china_india.rename_axis("Years", axis = 1, inplace = True)
df_china_india

<!-- ////////////////////////////////////////////////////////////////////////// -->

PLOTLY:
fig = go.Figure()
fig.add_trace(go.Bar(x = df_china_india.index, y = df_china_india["China"],
name = "China", textfont = dict(size = 100),
text = round(df_china_india["China"] /\
 (df_china_india["China"].sum()) \* 100, 2).apply(lambda x: f"{x}%"),
textposition = "outside", textfont_size = 100

                    )
             )

fig.add_trace(go.Bar(x = df_china_india.index, y = df_china_india["India"],
name = "India", textfont = dict(size = 100),
text = round(df_china_india["India"] /\
 (df_china_india["India"].sum()) \* 100, 2).apply(lambda x: f"{x}%"),
textposition = "outside", marker_color = "rgb(50, 80, 110)",
textfont_size = 100

                    )
             )

fig.update_traces(hoverinfo = "x+y+name+text")
fig.update_layout(title = "CHINA & INDIA (POPULATION)", titlefont = dict(size = 27),
title_x = 0.5, title_y = 0.99, height = 600, width = 900,

                  xaxis = dict(title = "Years", titlefont_size = 19,
                              tickfont_size = 14.2, range = [1967, 2025],
                              tickvals = [1970, 1980, 1990, 2000, 2010, 2015, 2020, 2022],
                              tickmode = "array", tickangle = 45, ticks = "outside", showgrid = True),

                  yaxis = dict(title = "Numbers of population", titlefont_size = 19,
                              tickfont_size = 13,
                              ticktext = [0, "200M", "400M", "600M", "800M"],
                              tickvals = [0, 200_000_000, 400_000_000, 6 * (10 ** 8),
                                         8 * (10 ** 8), 1 * (10 ** 9), 1.2 * (10 ** 9),
                                         1.4 * (10 ** 9)]),
                  legend = dict(orientation = "h", xanchor = "left", yanchor = "top",
                               x = 0.1, y = 1, bgcolor = "White",
                               bordercolor = "Black", borderwidth = 1.5),
                  font_size = 17, showlegend = True,
                  hovermode = "x",
                  paper_bgcolor = "rgb(220, 220, 220)", plot_bgcolor = "rgb(220, 220, 220)"

                 )

fig.add_annotation(text = "Increase (1970 - 2022)", showarrow = True, arrowhead = 2, arrowwidth = 2,
x = 1980, y = 1.1\*(10 \*\* 9), font_size = 16,
hovertext = "It' s increasing from 1970 - 2022")

# fig.update_xaxes(range=[1968, 2026])

fig.show()

<!-- ////////////////////////////////////////////////////////////////////////// -->

df_china_india.describe()
df_china_india.plot(kind = "box", color = 'red', figsize = (13, 6), vert = True)

TOP POPULATION OF THE 3 LARGEST ECONOMIES IN THE WORLD (USA, CHINA, JAPAN):
df_economic = df.set_index("Country")
df_economic = df_economic.loc[:, 2022:1970].transpose()
df_economic = df_economic.loc[:, ["United States", "China", "Japan"]].reset_index()
df_economic.rename({"index":"Years"}, axis = 1, inplace = True)
df_economic.rename_axis(None, axis = 1, inplace = True)
df_economic.style.background_gradient(cmap = "YlOrRd").bar(subset = ["United States"], color = "darkblue")\
 .bar(subset = ["Japan"], color = "green")

ax = df_economic.plot(kind = "bar", x = "Years", y =["United States", "China", "Japan"], figsize = (13, 6),
color = ["red", "blue", "green"],alpha = 0.75)

plt.title("THE POPULATION OF THE 3 LARGEST ECONOMIES IN THE WORLD", y = 1.11, fontsize = "x-large",
fontweight = "bold")

plt.xlabel("Years", fontsize = "large", labelpad = 10)
plt.ylabel("Population", fontsize = "large", labelpad = 10)
plt.xticks(rotation = 0)

ax.bar_label(ax.containers[1], padding = 3.5)

# plt.tight_layout()

plt.show()

<!-- ////////////////////////////////////////////////////////////////////////////// -->

# Set new column is Total population from 1970 to 2022

df["Total"] = df.loc[:, 2022:1970].sum(axis = 1, skipna = True)
df_continent = df.groupby(["Continent"])[df.columns].mean()
df_continent.style.background_gradient(cmap = "Purples")

PIE CHART:
df_continent.plot(kind = "pie", x = df_continent.index, y = "Total", figsize = (13, 6),
shadow = True, autopct = "%.1f%%", textprops = {"fontsize":13},
labels = df_continent.index, labeldistance = 1.3,
startangle = 45, colors = ["orchid", "green","red", "lightskyblue", "yellowgreen",
"blue"],
explode = [0, 0, 0.3, 0, 0, 0.3], rotatelabels = False, counterclock = True,
wedgeprops = {"edgecolor":"white", "linewidth":3})

plt.title("CONTINENT'S POPULATION", fontsize = "x-large", fontweight = "bold", y = 1.07)
plt.ylabel("Total", fontsize = "x-large")
plt.legend(df_continent.index, loc = "best", ncol = 2, bbox_to_anchor = (0.6, -0.1), fontsize = "large")

plt.axis("equal")
plt.show()

<!-- /////////////////////////////////////////////////////////////////////// -->

WORLD POPULATION PERCENTAGE 2020 AND 2022 BASE ON CONTINENT:
df_2020 = df.groupby(["Continent"], as_index = False)[2020].sum()
df_2022 = df.groupby(["Continent"], as_index = False)[2022].sum()

fig = make_subplots(rows = 1, cols = 2, specs = [[{"type":"domain"}, {"type":"domain"}]])
fig.add_trace(go.Pie(values = df_2020[2020], labels = df_2020["Continent"]), 1, 1)
fig.add_trace(go.Pie(values = df_2022[2022], labels = df_2022["Continent"]), 1, 2)

fig.update_traces(hole = 0.3, textposition = "inside", hoverinfo = "value+percent+label",
textinfo = "percent+label", insidetextorientation = "horizontal")
fig.update_layout(title = "WORLD POPULATION PCT 2020 AND 2020", title_x = 0.5, title_font = dict(size = 20))

fig.add_annotation(text = "2020", showarrow = False, x = 0.185, font_size = 24)
fig.add_annotation(text = "2022", showarrow = False, x = 0.815, font_size = 24)

fig.show()

<!-- /////////////////////////////////////////////////////////////////////////// -->

RELATIONSHIP (AREA, DENSITY, GROWTH RATE, PERCENTAGE):

df_relationship = df[["Area (km²)", "Density (per km²)", 
                     "Growth Rate", "World Population Percentage"]].corr()
sns.heatmap(data = df_relationship, annot = True)
plt.tight_layout()
plt.show()

<!-- ///////////////////////////////////////////////////////////////////////// -->

CHOROPLETH MAP:

fig = px.choropleth(df, locations = "Country",
locationmode = "country names", title = "Growth Rate",
color = "Growth Rate", color_continuous_scale = "Viridis")
fig.show()

fig = px.choropleth(df, locations = "Country",
locationmode = "country names", title = "Area (km²)",
color = "Area (km²)")
fig.show()
