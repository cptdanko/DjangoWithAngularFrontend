from django.shortcuts import render

# Create your views here.

def angularDemo(request):
	return render(request,'angularDemo/index.html')

def ionicDemo(request):
	return render(request, 'ionic/index.html')
