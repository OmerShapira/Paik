WW.Range = function(begin, end){
	// Range functions
	// Loosely inspired by https://github.com/Flightphase/ofxRange/
	if (begin > end){
		var tmp = end;
		end = begin;
		begin = tmp;
	}
	_begin	= begin;
	_end	= end;
};

WW.Range.prototype = {
		_begin: 0,
		_end: 1,
		
		get begin() {return _begin;},
		get end()	{return _end;},
		get length(){return end - begin;},

		grow: function(other){
			//FIXME: Should mayber return an array of ranges instead?
			return new WW.Range (
					Math.min(begin, other.begin), 
					Math.max(end, other.end)
				);
		},

		contains: function(other){
			if (typeof(other) === 'number'){
				return (begin <= other) && (end >=other);
			} else {
				return (min <= other.min) && (max >= other.max);
			}
 		},

		overlaps: function(other){
			//inclusive overlap: will return true for overlaps of 0 
			if (this.contains(other) || other.contains(this)){
				return true;
			} else {
				return (this.contains(other.begin) || this.contains(other.end));
			}
		},

		intersection : function(other){
			if (this.overlaps(other)){
				return new WW.Range (
							Math.max(begin, other.begin), 
							Math.min(end, other.end)
						 );	
			} else {
				//FIXME: Return empty range or something
				return	null;
			}
		},
};

WW.Range.Tree = function(){
	//TODO (OS): Stub
 };