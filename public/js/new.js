$(function(){
    $("#itemPictures").fileinput({
        uploadUrl:"/photo",
        showCaption: false,
        autoReplace: true,
        maxFileCount: 9,
        showUpload: false,
        showRemove: false,
        dropZoneEnabled: false,
        // enctype: 'multipart/form-data',
        allowedFileExtensions: ['jpg', 'png', 'gif']
    })
    $('#picup').click(function(){
        console.log('upload pics')
        $('#itemPictures').fileinput("upload")
    })
})