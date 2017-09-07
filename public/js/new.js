$(function(){
    $("#itemPictures").fileinput({
        uploadUrl:"/",
        showCaption: false,
        autoReplace: true,
        maxFileCount: 9,
        allowedFileExtensions: ['jpg', 'png', 'gif']
    })
})