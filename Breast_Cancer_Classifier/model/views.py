from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from joblib import load
import numpy as np
import os
from django.conf import settings

# Create your views here.
@login_required(login_url='login')
def home_page(request):
    return render(request,'home.html',{})

def predict_page(request):
    result = None  # ✅ Initialize the variable
    if request.method == 'POST':
        v1 = float(request.POST.get('age'))
        v2 = float(request.POST.get('menopause'))
        v3 = float(request.POST.get('tumor-size'))
        v4 = float(request.POST.get('inv-nodes'))
        v5 = request.POST.get('breast')
        v6 = float(request.POST.get('metastasis'))
        v7 = request.POST.get('breast-quadrant')
        v8 = float(request.POST.get('history'))

        match v7:
            case "upper-inner":
                v7=2
            case "upper-outer":
                v7=3
            case "lower-outer":
                v7=1
            case "lower-inner":
                v7=0

        match v5:
            case "right":
                v5=1
            case "left":
                v5=0

        print(v1,v2,v3,v4,v5,v6,v7,v8)
        # model = load("C:\\Users\\samar\\OneDrive - Charotar University\\sem-7\\ML Work\\Breast_Cancer_Prediction\\model.joblib") Not working in deployment
        
        model_path = os.path.join(settings.BASE_DIR, 'model.joblib')
        model = load(model_path)


        
        

        # Sample input for prediction (replace with actual values)
        # Example: if model expects 4 features
        input_data = np.array([[v1,v2,v3,v4,v5,v6,v7,v8]])  # shape must be (1, n_features)

        # Make prediction
        prediction = model.predict(input_data)
        result = str(prediction[0]) 

        # Print result
        print("Prediction:", prediction[0])





    return render(request,'predict.html',{"result":result})
