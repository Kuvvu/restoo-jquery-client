(function($) {
    $.restoo = function( options ) {

      var rest = function(action, args){
        return $.ajax({
          beforeSend: function(request) {
            if(options.auth) request.setRequestHeader(Object.keys(options.auth)[0], options.auth[Object.keys(options.auth)]);
          },
          url : options.api + action,
          type: "POST",
          data: JSON.stringify(args),
          contentType: "application/json; charset=utf-8"
        });
      };

      this.select = function(){
        return rest('select', Array.from(arguments))
      };

      this.update = function(){
        return rest('update', Array.from(arguments))
      };

      this.delete = function(){
        return rest('delete', Array.from(arguments))
      };

      return this;
    };
}(jQuery));
