formatTime: function(time, type){//格式化时间函数
      		var mGap=60, hGap = 60*60, dGap = 24*3600, wGap = 7*24*3600;
      		var str = '还剩';
      		type = type || 1;
      		if (type == 1) {//还剩下多少时间
      			time = Math.ceil(time/1000);
      			do{
	      			if (time >= dGap) {
	      				str += (parseInt(time/dGap, 10)+'天');
	      				time = time%dGap;
	      			}else if (time >= hGap) {
	      				str += (parseInt(time/hGap, 10)+'时');
	      				time = time%hGap;
	      			}else if (time >= mGap) {
	      				str += (parseInt(time/mGap, 10)+'分');
	      				time = time%mGap;
	      				if (time == 0) {
	      					str += '0秒';
	      					break;
	      				};
	      			}else{
	      				str += (parseInt(time, 10)+'秒');
	      				break;
	      			}
	      			if (time == 0) {
	      				break;
	      			};
	      		}while(true);
      		}else if (type == 2) {//发布多长时间
      			var temp = time;
      			time = new Date().getTime() - time;
      			time = Math.ceil(time/1000);
      			if (time < mGap) {
      				str = time + '秒前';
      			}else if (time < hGap) {
      				str = parseInt(time/mGap, 10) + '分钟前';
      			}else if (time < dGap) {
      				str = parseInt(time/hGap, 10) + '小时前';
      			}else if (time < wGap) {
      				str = parseInt(time/dGap, 10) + '天前';
      			}else{
      				str = misc.formatDateTime(new Date(temp),misc.formatType['4'])
      				// str = parseInt(time/wGap, 10) + '周前';
      			}
      		}else if (type == 3) {//购物车，没有小时，只有分钟和秒数
      			str = '';
      			time = Math.ceil(time/1000);
				do{
		  			if (time >= mGap) {
		  				t = parseInt(time/mGap, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				str += (t+':');
		  				time = time%mGap;
		  				if (time == 0) {
		  					str += '00';
		  					break;
		  				};
		  			}else{
		  				t = parseInt(time, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				str += t;
		  				break;
		  			}
		  		}while(true);
		  		var arr = str.split(':');
		  		if (arr.length == 1) {
		  			arr.unshift('00');
		  		}
		  		str = arr.join(':');
      		}else{//烦死了，返回json，自己拼吧
      			var result = {};
      			str = '';
      			time = Math.ceil(time/1000);
				do{
					if (time >= hGap) {
						t = parseInt(time/hGap, 10);
						if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.hour = t;
		  				time = time%hGap;
		  				if (time == 0) {
		  					result.minute = '00';
		  					result.second = '00';
		  					break;
		  				};
					}else if (time >= mGap) {
		  				t = parseInt(time/mGap, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.minute = t;
		  				time = time%mGap;
		  				if (time == 0) {
		  					result.second = '00';
		  					break;
		  				};
		  			}else{
		  				t = parseInt(time, 10);
		  				if (t<10) {
		  					t = '0'+t;
		  				};
		  				result.second = t;
		  				break;
		  			}
		  		}while(true);
		  		!result.hour ? (result.hour = '00') : '';
		  		!result.minute ? (result.minute = '00') : '';
		  		!result.second ? (result.second = '00') : '';
		  		return result;
      		}
      		return str;
    },