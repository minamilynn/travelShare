      let action = "";
        function setAction(actionParam) {
          console.log("setAction = " + actionParam);
          action = actionParam;
        }

      function successCreate(data) { 
        if (data==null)
        {
          if ($("#continent_name").val()=="")
            alert("ERROR: Please click on the map to select a continent!")
          else if ($("#name").val()=="")
            alert("ERROR: Enter a valid username!")
          else if ($("#country").val()=="")
            alert("ERROR: Enter a valid country!")
          else if ($("#description").val()=="")
            alert("ERROR: Enter a valid description!")
          else 
            alert("ERROR")
        }
        else
        {
          alert("Posted Succesfully!")
        }
      }

     function uploadSuccess (data) {
      console.log("uploadSuccess====="+action)
          if (action == "Create")
          {

              $.ajax({
                url: "/create",
                type: "POST",
                data: {continent:$("#continent_name").val(), name:$("#name").val(), country:$("#country").val(), description:$("#description").val(), image: null},
                success:successCreate,
                dataType: "json"
              })
          }
   }

      $(document).ready(function(){

        $("form").submit(function(event) {  
          if($("#uploader").val()!="")
          {
          let data = new FormData($(this)[0]);

          $.ajax({
            url: "/uploadSuccessPath",
            type: "POST",
            data: data,
            processData: false, // These two are needed to prevent JQuery from processing the form data
            contentType: false,
            mimeType: 'multipart/form-data',
            success: uploadSuccess,     
            dataType: "json"
          });
        }
        else
          alert("ERROR: Enter a valid image!")
          return false;
        });
        /*
        $("form").submit(function(event) {  
          let data = new FormData($(this)[0]);
          console.log($(this)[0])

          $.ajax({
            url: "/uploadSuccessPath",
            type: "POST",
            data: data,
            processData: false, // These two are needed to prevent JQuery from processing the form data
            contentType: false,
            mimeType: 'multipart/form-data',
            success: uploadSuccess,     
            dataType: "json"
          });
          return false;
        });
        */
        //let data = new FormData($(this)[7]);


      });   

