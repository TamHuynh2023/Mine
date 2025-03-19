from ultralytics import YOLO

model = YOLO("yolov8x")
results = model.predict("D:/Programming/Mine/AI-DataScience/test cho vu/input video/Carlos Alcaraz vs Denis Shapovalov Highlights  Indian Wells 2025 - 1080-1.mp4", save=True)

# Iterate through the generator to get individual results
for result in results:
    print("boxes:")
    for box in result.boxes:
        print(box)