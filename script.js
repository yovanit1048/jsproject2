
            $.ajax({
                url: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
                dataType: 'json',
                success: function(data) {
                    
                    // collect the categories
                    var categories = [];
                    for(var i = 0; i < data.entries.length; i++){
                        console.log(data.entries[i]);
                        var currentCategory = data.entries[i].Category;
                        if(!categories.includes(currentCategory)){ // ensure no repeats
                            categories.push(currentCategory);
                        }
                    }
                    
                    // print the categories
                    var categoriesString = "";
                    for(var i = 0; i < categories.length; i++){
                        categoriesString += categories[i] + ", ";
                    }
                    categoriesString = categoriesString.substring(0,categoriesString.length-2); // remove the trailing comma
                    document.write(categoriesString);
                    
                }
            });

            
            