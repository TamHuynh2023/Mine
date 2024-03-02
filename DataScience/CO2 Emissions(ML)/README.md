import random
import datetime

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_style("whitegrid")
sns.despine()

import plotly.graph_objects as go
import plotly.express as px
from plotly.subplots import make_subplots

import folium
from folium import plugins

import sklearn
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

<!-- ///////////////////////////////////////////////////////////////////////// -->

df = pd.read_csv("CO2 Emissions_Canada.csv", skipinitialspace = True, index_col = 0)
df

sns.lineplot(data = df, x = "Engine Size(L)", y = "CO2 Emissions(g/km)")

df.describe()
df.info()

# delete unnecessary columns

df.drop("Model", axis = 1, inplace = True)

# chech nan values

for column in df.columns:
print(column)
print(f"{df[column].isnull().value_counts()}\n")

DATA FORMATTING
df["CO2 Emissions(g/km)"] = df["CO2 Emissions(g/km)"].astype(int)
df.rename({"Make":"Car"}, axis = 1, inplace = True)

df.dtypes

<!-- ////////////////////////////////////////////////////////////////////////// -->

DATA VISUALIZATION:
BINING:

count, bins_edge1 = np.histogram(df["Fuel Consumption City (L/100 km)"])
count, bins_edge2 = np.histogram(df["Fuel Consumption Hwy (L/100 km)"])

fig = plt.figure(figsize = (14,7))
ax1 = fig.add_subplot(1, 2, 1)
ax2 = fig.add_subplot(1, 2, 2)

df["Fuel Consumption City (L/100 km)"].plot(kind = "hist", xticks = bins_edge1, ax = ax1)
ax1.set_title("Fuel city", y = 1.04)

df["Fuel Consumption Hwy (L/100 km)"].plot(kind = "hist", xticks = bins_edge2 ,ax = ax2)
ax2.set_title("Fuel Hwy", y = 1.04)

plt.tight_layout()
plt.show()

<!-- //////////////////////////////////////////////////////////////////////////// -->

bins1 = np.linspace(min(df['Fuel Consumption City (L/100 km)']), max(df["Fuel Consumption City (L/100 km)"]), 3)
bins2 = np.linspace(min(df["Fuel Consumption Hwy (L/100 km)"]), max(df["Fuel Consumption Hwy (L/100 km)"]), 3)

df["Density of Fuel City"] = pd.cut(df["Fuel Consumption City (L/100 km)"], bins1, labels = ["Low", "High"])
df["Density of Fuel HWy"] = pd.cut(df["Fuel Consumption Hwy (L/100 km)"], bins2, labels = ["Low", "High"])
df

sns.pairplot(df, hue = "Density of Fuel City")

<!-- /////////////////////////////////////////////////////////////////////// -->

HISTOGRAM CHART:
plt.figure(figsize = (14,7))
sns.histplot(data = df, x = "Vehicle Class", hue = "Density of Fuel City")

plt.title("COUNT VEHICLE CLASS", fontweight = "bold", fontsize = "x-large", y = 1.1)
plt.xlabel("Vehicle Class", fontsize = "large", labelpad = 10)
plt.ylabel(None)
plt.tick_params(axis = "x", labelsize = "medium")
plt.tick_params(axis = "y", labelsize = "large")

plt.xticks(rotation = 90)
plt.show()

<!-- //////////////////////////////////////////////////////////////////////////// -->

RELATIONSHIP OF CAR AND CO2 EMISSIONS:
df_vehicle_co2 = df.groupby(["Car"], as_index = False)["CO2 Emissions(g/km)"].mean()
df_vehicle_co2

<!-- ///////////////////////////////////////////////////////////////////////// -->

BAR CHART:  
plt.figure(figsize = (14, 7))
sns.barplot(data = df_vehicle_co2, x = "Car", y = "CO2 Emissions(g/km)")

plt.title("RELATIONSHIP OF CAR AND CO2", fontweight = "bold", fontsize = "x-large", y = 1.1)
plt.xlabel("Car", fontsize = "large", labelpad = 10)
plt.ylabel("Co2 Emissions", fontsize = "x-large", labelpad = 10)

plt.tick_params(axis = "x", labelsize = "medium")
plt.tick_params(axis = "y", labelsize = "large")

plt.xticks(rotation = 90)
plt.show()

<!-- //////////////////////////////////////////////////////////////////////// -->

df.columns

df_fuel = df[['Fuel Consumption City (L/100 km)',
       'Fuel Consumption Hwy (L/100 km)', 'Fuel Consumption Comb (L/100 km)',
       'Fuel Consumption Comb (mpg)']].corr()
sns.heatmap(data = df_fuel, annot = True)

<!-- /////////////////////////////////////////////////////////////////////////// -->

TOP 7 VEHICLES CLASS THAT EMIT THE MOST CO2:
df1 = df.groupby(["Vehicle Class"])[["CO2 Emissions(g/km)"]].mean().sort_values("CO2 Emissions(g/km)", ascending = False)
df1

<!-- /////////////////////////////////////////////////////////////////////////// -->

PIE CHART:

df1["CO2 Emissions(g/km)"].head(7).plot(kind = "pie",  
 colors = ["orchid", "green", "yellowgreen", "red", "blue", "pink", "lightskyblue"],
shadow = True, explode = [0, 0, 0, 0.1, 0.2, 0, 0],
autopct = "%.1f%%", textprops = {"fontsize":10.5} ,
labels = df1.index, startangle = 90,
pctdistance = 0.7, counterclock = True, frame = False, labeldistance = 1.10,
rotatelabels = False,
wedgeprops = {'linewidth': 3, 'edgecolor': 'white'})

# colors = "cornflowerblue", "orchid"

# plt.gcf().gca().add_artist(plt.Circle((0, 0), 0.40, fc="white"))

plt.title("TOP 7 VEHICLE CLASS THAT EMIT THE MOST CO2", fontsize = "large", fontweight = "bold", y = 1.03)
plt.legend(df1.index, ncol = 2, loc = "best", bbox_to_anchor=(0.72, -0.04), fontsize = 'medium')
plt.ylabel("CO2 Emissions(g/km)", fontsize = "large")

plt.axis("equal")

# plt.tight_layout()

plt.show()

<!-- ////////////////////////////////////////////////////////////////////////// -->

MACHINE LEARNING (LINEAR REGRESSION WITH MATPLOTLIB):

df.columns

cdf = df[['Engine Size(L)',"Fuel Consumption City (L/100 km)",
       'Fuel Consumption Hwy (L/100 km)', 'Fuel Consumption Comb (L/100 km)',
       'Fuel Consumption Comb (mpg)', 'CO2 Emissions(g/km)']]
cdf.hist()

plt.tight_layout()
plt.show()

<!-- ////////////////////////////////////////////////////////////////////// -->

COMPARISION - SCATTER:
fig = plt.figure(figsize = (14, 7))
ax1 = fig.add_subplot(2, 2, 1)
ax2 = fig.add_subplot(2, 2, 2)
ax3 = fig.add_subplot(2, 2, 3)
ax4 = fig.add_subplot(2, 2, 4)

cdf.plot(kind = "scatter", x = "Fuel Consumption City (L/100 km)", y = "CO2 Emissions(g/km)",
color = "blue", alpha = 0.5, ax = ax1)

cdf.plot(kind = "scatter", x = 'Fuel Consumption Hwy (L/100 km)', y = "CO2 Emissions(g/km)",
color = "blue", alpha = 0.5, ax = ax2)

cdf.plot(kind = "scatter", x = 'Fuel Consumption Comb (L/100 km)', y = "CO2 Emissions(g/km)",
color = "blue", alpha = 0.5, ax = ax3)

cdf.plot(kind = "scatter", x = 'Fuel Consumption Comb (mpg)', y = "CO2 Emissions(g/km)",
color = "blue", alpha = 0.5, ax = ax4)

plt.tight_layout()
plt.show()

<!-- ////////////////////////////////////////////////////////////////////////// -->

SIMPLE REGRESSION:
msk = np.random.rand(len(df)) < 0.8
train = cdf[msk]
test = cdf[msk]
from sklearn.linear_model import LinearRegression
lm = LinearRegression()
X_train = train[["Engine Size(L)"]]
y_train = train[["CO2 Emissions(g/km)"]]
lm.fit(X_train, y_train)

print("Coefficients: ", lm.coef*)
print("Intercept: ", lm.intercept*)

<!-- //////////////////////////////////////////////////////////////////////// -->

SCARTTER-BAR CHART:
train.plot(kind = "scatter", x = "Engine Size(L)", y = "CO2 Emissions(g/km)",
color = "blue", alpha = 0.5, figsize = (14, 6))
plt.plot(X*train, lm.coef*[0][0] \* X*train + lm.intercept*[0], "r")

plt.show()

<!-- /////////////////////////////////////////////////////////////////////////// -->

MACHINE LEARNING (LINEAR REGRESSION WITH SEABORN):
ax = sns.lmplot(data = df, x = "Engine Size(L)", y = "CO2 Emissions(g/km)",
col = "Density of Fuel City", hue = "Density of Fuel HWy", height = 5,
facet_kws = dict(sharex = False, sharey = False))

ax.set_titles(col_template = "{col_name}", size = "x-large", y = 1.04)
ax.set_xlabels(size = "large", labelpad = 10)
ax.set_ylabels(size = "large", labelpad = 10)
ax.tick_params(axis = "x", labelsize = "large")
ax.tick_params(axis = "y", labelsize = "large")

# plt.tight_layout()

plt.show()

<!-- //////////////////////////////////////////////////////////////////////// -->

MACHINE LEARNING (LINEAR REGRESSION WITH SKLEARN):
cdf = df[['Engine Size(L)',"Fuel Consumption City (L/100 km)",
       'Fuel Consumption Hwy (L/100 km)', 'Fuel Consumption Comb (L/100 km)',
       'Fuel Consumption Comb (mpg)', 'CO2 Emissions(g/km)']]
cdf

x = cdf[['Engine Size(L)', 'Fuel Consumption City (L/100 km)',
       'Fuel Consumption Hwy (L/100 km)', 'Fuel Consumption Comb (L/100 km)',
       'Fuel Consumption Comb (mpg)']]
y = cdf["CO2 Emissions(g/km)"]

# train_test_split

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(x, y, random_state = 0, test_size = 0.3)

# fit linear regression

from sklearn.linear*model import LinearRegression
lm = LinearRegression()
lm.fit(X_train, y_train)
print("Coefficient: ", lm.coef*)
print("Intercept: %.2f\n" % lm.intercept\_)

# predict

prediction = lm.predict(X_test)

# model evaluation

from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
print("Varicance score: %.2f" % r2_score(y_test, prediction))
print("MAE: %.2f" % mean_absolute_error(y_test, prediction))
print("MSE: %.2f" % mean_squared_error(y_test, prediction))
print("RMSE: %.2f\n" % np.sqrt(mean_squared_error(y_test, prediction)))

print("y_test max: ", y_test.max())
print("predictions max: ", prediction.max())

plt.scatter(y_test, prediction, color = "blue", alpha = 0.5)
plt.xlabel("y_test")
plt.ylabel("prediction")

sns.histplot(y_test - prediction, bins = 50)
