from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Blog
from api.serializers import BlogSerializer

@api_view(['GET'])
def getBlogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postBlog(request):
    data = request.data
    serializer = BlogSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['PUT'])
def putBlog(request, pk):
    data = request.data
    # blog = Blog.objects.get(id=pk) 
    blog = Blog.objects.filter(id=pk).first()
    serializer = BlogSerializer(instance=blog, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog deleted')
