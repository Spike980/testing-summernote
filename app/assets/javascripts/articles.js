$(document).on('turbolinks:load', ready)
$(document).on('ready', ready)

function ready() {

	$('#summernote').summernote({
	  'height': 200,
	  'shortcuts': false,
      'fontNames': ['Open Sans', 'Noto Sans'],
      'fontNamesIgnoreCheck': ['Open Sans', 'Noto Sans'],
	  'linkTargetBlank': true,
      'styleTags': ['p', 'blockquote', 'h3', 'h4', 'h5', 'h6'],
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'italic', 'clear']],
          ['fontname', ['fontname']],
          // ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'hr', 'video']],
          ['view', ['fullscreen']]
        ],
         cleaner:{
          notTime: 2400, // Time to display Notifications.
          action: 'both', // both|button|paste 'button' only cleans via toolbar button, 'paste' only clean when pasting content, both does both options.
          newline: '<br/>', // Summernote's default is to use '<p><br></p>'
          notStyle: 'position:absolute;top:0;left:0;right:0', // Position of Notification
          icon: '<i class="note-icon">[Your Button]</i>',
          keepHtml: true, // Remove all Html formats
          keepOnlyTags: ['<em>', '<div>', '<section>', '<article>', '<p>', '<br>', '<ul>', '<li>', '<b>', '<strong>','<i>', '<a>', '<img>'], // If keepHtml is true, remove all tags except these
          keepClasses: false, // Remove Classes
          badTags: ['style', 'script', 'applet', 'embed', 'noframes', 'noscript', 'html'], // Remove full tags with contents
          badAttributes: ['style', 'start', 'class'] // Remove attributes from remaining tags
	    },


        
        
        callbacks: {
          onImageUpload: function(files) {
          	console.log("image upload")
            img = upload_episode_image(this, files[0])
          },
          onMediaDelete: function(target, editor, editable) {
            image_id = target[0].id;
            if (!!image_id) {
              delete_episode_image(image_id)
            }
            target.remove()
          },
        },
        
        
	})

	$('#summernote').summernote('fontName', 'Open Sans');

}


	

	function upload_episode_image(that, file) {
		console.log("uploading image")
	    data = new FormData
	    data.append('image[image]', file)
	    $.ajax({
	      data: data,
	      type: 'POST',
	      url: '/images',
	      cache: false,
	      contentType: false,
	      processData: false,
	      success: function(data) {
	        img = document.createElement('IMG')
	        img.src = data.url
	        img.setAttribute('id', data.image_id)
	        $(that).summernote('insertNode', img)
	      }
	    })
	}

	function delete_episode_image(file_id) {
		console.log(file_id+ "file")
	    $.ajax({
	      type: 'DELETE',
	      url: "/images/"+file_id,
	      cache: false,
	      contentType: false,
	      processData: false
	    })
	}
	


