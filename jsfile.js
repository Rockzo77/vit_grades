var getMarks=function(){var a,t,e=parseFloat($("#cat1").val()),l=parseFloat($("#cat2").val()),s=parseFloat($("#da").val()),i=parseFloat($("#lab").val()),r=parseFloat($("#j-comp").val()),v=parseFloat($("#fat").val());console.log(e,l,s,i,r,v),i&&r?a=3:i&&!r?a=2:r&&!i?a=1:r||i||(a=0);var c=.3*(e+l)+s+.4*v;switch(a){case 0:t=c;break;case 1:t=.75*c+.25*r;break;case 2:t=.75*c+.25*i;break;case 3:t=.6*c+.2*i+.2*r}isNaN(t)?alert("Insufficient Data !!"):($(".alert-marks").show(),$("#marks").html("YOUR EXPECTED MARKS IS "+t.toFixed(2)))};function clearAll(){$("#g1").val("0"),$("#g2").val("0"),$("#g3").val("0"),$("#g4").val("0"),$("#g5").val("0"),$("#g6").val("0"),$("#g7").val("0"),$("#g8").val("0"),$("#g9").val("0"),$("#g10").val("0"),$("#c1").val("0"),$("#c2").val("0"),$("#c3").val("0"),$("#c4").val("0"),$("#c5").val("0"),$("#c6").val("0"),$("#c7").val("0"),$("#c8").val("0"),$("#c9").val("0"),$("#c10").val("0")}$("#submit").click(function(){document.getElementById("cgpa-msg").classList.remove("hide");var a=parseFloat($("#cgpa").val()),t=parseFloat($("#gpa").val()),e=parseFloat($("#c").val()),l=parseFloat($("#tc").val()),s=(a*l+t*e)/(l+e);isNaN(s)&&(alert("Insufficient data!"),s="Unavailable"),$(".alert-cgpa-msg").show(),document.getElementById("cgpa-msg").innerHTML="YOUR CGPA IS "+s.toFixed(2)}),$("#sem-cgpa-btn").on("click",function(){var a,t,e,l,s,i,r,v,c=0,n=0,d=0,o=0,p=0,g=0,h=0,u=0,f=0;a=$("#gpa1").val(),c=$("#fc1").val(),""!=a&&""!==c||(c=0,a=0),t=$("#gpa2").val(),n=$("#fc2").val(),""!=t&&""!==n||(n=0,t=0),e=$("#gpa3").val(),d=$("#fc3").val(),""!=e&&""!==d||(d=0,e=0),l=$("#gpa4").val(),o=$("#fc4").val(),""!=l&&""!==o||(o=0,l=0),s=$("#gpa5").val(),p=$("#fc5").val(),""!=s&&""!==p||(p=0,s=0),i=$("#gpa6").val(),g=$("#fc6").val(),""!=i&&""!==g||(g=0,i=0),r=$("#gpa7").val(),h=$("#fc7").val(),""!=r&&""!==h||(h=0,r=0),v=$("#gpa8").val(),u=$("#fc8").val(),""!=v&&""!==u||(u=0,v=0),f=(parseFloat(a)*c+parseFloat(t)*n+parseFloat(e)*d+parseFloat(l)*o+parseFloat(s)*p+parseFloat(i)*g+parseFloat(r)*h+parseFloat(v)*u)/(1*c+1*n+1*d+1*o+1*p+1*g+1*h+1*u),isNaN(f)?alert("Insufficient Data !!"):($(".alert-fcgpa").show(),$("#fcgpa").html("YOUR CGPA WOULD BE "+f.toFixed(2)))}),$("#gbtn").on("click",function(){var a,t,e,l,s,i,r,v,c,n,d,o,p,g,h,u,f,m,I,b,F=0;a=parseInt($("#g1").val()),t=parseInt($("#g2").val()),e=parseInt($("#g3").val()),l=parseInt($("#g4").val()),s=parseInt($("#g5").val()),i=parseInt($("#g6").val()),r=parseInt($("#g7").val()),v=parseInt($("#g8").val()),c=parseInt($("#g9").val()),n=parseInt($("#g10").val()),F=((d=parseInt($("#c1").val()))*a+(o=parseInt($("#c2").val()))*t+(p=parseInt($("#c3").val()))*e+(g=parseInt($("#c4").val()))*l+(h=parseInt($("#c5").val()))*s+(u=parseInt($("#c6").val()))*i+(f=parseInt($("#c7").val()))*r+(m=parseInt($("#c8").val()))*v+(I=parseInt($("#c9").val()))*c+(b=parseInt($("#c10").val()))*n)/(d+o+p+g+h+u+f+m+I+b),isNaN(F)&&(alert("Insufficient data!"),F="Unavailable"),$(".alert-grades").show(),$("#grades").html("YOUR GPA IS "+F.toFixed(2)),document.getElementById("reset").classList.remove("hide")}),$(".cgpa-input").on("keyup",function(){var a=document.getElementById(this.id).value;if(""==!a){/^\d+\.?\d{0,2}$/.test(a)||(alert("Please enter a valid data."),$(this).val(""))}(a>10||a<0)&&"gpa"===this.id?(alert("Your GPA should be between 0 and 10 !"),$(this).val("")):(a>10||a<0)&&"cgpa"===this.id?(alert("Your CGPA should be between 0 and 10 !"),$(this).val("")):(a>32||a<0)&&"c"===this.id?(alert("Your Credits should be between 16 and 32 !"),$(this).val("")):(a>200||a<0)&&"tc"===this.id&&(alert("Your Credits should be between 0 and 200 !"),$(this).val(""))}),$(".form-control").on("keyup",function(){var a=document.getElementById(this.id).value;if(""==!a){/^\d+\.?\d{0,2}$/.test(a)||(alert("Please enter a valid data."),$(this).val(""))}!(a>10||a<0)||"gpa1"!==this.id&&"gpa2"!==this.id&&"gpa3"!==this.id&&"gpa4"!==this.id&&"gpa5"!==this.id&&"gpa6"!==this.id&&"gpa7"!==this.id&&"gpa8"!==this.id?!(a>50||a<0)||"cat1"!==this.id&&"cat2"!==this.id?(a>30||a<0)&&"da"===this.id?(alert("Your DA marks should be between 0 and 30 !"),$(this).val("")):!(a>100||a<0)||"lab"!==this.id&&"j-comp"!==this.id&&"fat"!==this.id?!(a>32||a<0)||"fc1"!==this.id&&"fc2"!==this.id&&"fc3"!==this.id&&"fc4"!==this.id&&"fc5"!==this.id&&"fc6"!==this.id&&"fc7"!==this.id&&"fc8"!==this.id||(alert("Your Credits should be between 16 and 27 !"),$(this).val("")):(alert("Your Lab, Fat and Project marks should be between 0 and 100 !"),$(this).val("")):(alert("Your CAT1 and CAT2 marks should be between 0 and 50 !"),$(this).val("")):(alert("Your GPA should be between 0 and 10 !"),$(this).val(""))});var changeActiveLink=function(a){$("li").removeClass("active"),className=".link"+a,$(className).addClass("active"),$(".navbar-collapse").removeClass("show"),$(".navbar-toggler").attr("aria-expanded",!1)};$(".alert").hide();