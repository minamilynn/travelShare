      var savedCont = ""
      let index = 0
      ;
      function ready(){
        console.log("Selected Continent Changed")
          //let postNum = 0
          //var list=[];
          index=0;
          var name = $("#menu").val();
          $.ajax({
            url: "/getListlength",
            type: "GET",            
            data: null,
            success: function(data){
          if (data!= null)
             {
                 index=(data.length-1);
                 createList(index,name)
              }
              else 
              {
                console.log("call failed")
              }
           },
           error: function(data)  {
              alert("ERROR")
           },
           dataType: "json"
        });   

        };

    function createList(index,name){
      console.log("Initial Index: "+index)
      saveContient(name); 
      while (index>=0)
          {
                 $.ajax({
                  url: "/read",
                  type: "GET",            
                  data: {continent:name, index:index},
                  success: function(data){
                      if (data!=null){
                          $("#form").append("<li>" +  "Name: " + data.name + "<br>"+"country:" + data.country+ "<br>" + "<img src= 'images/" + data.image+"'  height='285' width='380'> </img> <br> Description: " + data.description+"</li>");
                      }
                      else
                        console.log("skipped")
                  },     
                  dataType: "json"
                }); 
                index--;
        }
        index=0;


    }

      function saveContient(name){
        console.log("Comparing "+name+" to "+savedCont)
        if (savedCont=="")
          savedCont=name;
        else if (savedCont!= name)
        {
          console.log(name+" is not the same as "+savedCont)
          $("#form").html("");
          savedCont=name;
        }
        return (false)

      };

