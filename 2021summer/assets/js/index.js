$(function () {
	var width = $(window).width(),
		height = $(window).height();
	var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
	var android = (navigator.userAgent.match(/android/i) != null);
	var iPad = navigator.userAgent.match(/iPad/i) != null;

    if (iPad) {
        iPhone = false;
        android = false;
        $('video').load();
	}
	if (iPhone) {
        iPad = false;
        android = false;
        $('video').load();
	}
	if (android) {
        iPad = false;
        iPhone = false;
        var video = document.querySelector('video');
        $('video').load();
        $("video").attr('poster', 'assets/images/opening.png');
        $("video").attr('source', 'assets/images/opening.mp4');
        window.addEventListener('touchstart', function videoStart() {
            video.play();
            this.removeEventListener('touchstart', videoStart);
		});
	}
	$('.slider-center').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		centerMode: true,
		centerPadding: '0',
		prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="icon icon-chevron-right"></i></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	var agendaItem = '';
	for (let f = 0; f < agenda.length; f++) {
		switch(f) {
			case 0:
			case 3:
			case 6:
				agendaItem += '<div class="agenda-item"><div class="container agenda-head"><div class="row"><div class="col-12"><div class="row"><div class="col-md-9 col-sm-10"><div class="agenda-text"><div class="agenda-title h3 font-weight-500 my-0 text-center">' + agenda[f]["title"] + '</div><p class=" text-md-center text-left">' + agenda[f]["intro"] + '</p>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<button class="btn btn--standard btn--yellow mx-auto"> 查看講者 <i class="icon icon-chevron-down"></i></button>';
				}
				agendaItem += '</div><div class="agenda-img agenda-img-main mt-md-60 mt-30"><img src="assets/images/agenda/' + agenda[f]["img-1"] + '" alt="' + agenda[f]["title"] + '"></div></div></div></div></div></div>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<div class="agenda-body"><div class="container"><div class="row">';
					for (let g = 0; g < agenda[f]["speaker"].length; g++) {
						agendaItem += '<div class="speaker-item display-md-block display-flex col-md-3"><img src="assets/images/speaker/' + agenda[f]["speaker"][g]["img"] + '" alt="' + agenda[f]["speaker"][g]["nameZh"] + '" class="speaker-img mx-auto"><div class="speaker-text text-md-center"><div class="h3 mt-md-5 my-0 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameZh"] + '</div><div class="h3 my-0 pl-md-0 pl-10 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameEn"] + '</div><p class="mt-md-10 mt-5 mb-md-20 mb-10">' + agenda[f]["speaker"][g]["titleZh"] + '</p><button class="speaker-more btn btn--standard btn--outlined mx-md-auto serif font-weight-700" data-name="' + agenda[f]["speaker"][g]["nameZh"] + '">MORE</button></div></div>';
					}
					agendaItem += '</div></div></div>';
					agendaItem += '</div>';
				}
				agendaItem += '</div></div>';
				break;
			case 1:
			case 4:
			case 7:
				agendaItem += '<div class="agenda-item"><div class="container agenda-head"><div class="row"><div class="col-md-9 col-sm-10"><div class="row"><div class="col-agenda-4"><div class="agenda-text"><div class="agenda-title h3 font-weight-500 my-0 text-md-left text-center">' + agenda[f]["title"] + '</div><p>' + agenda[f]["intro"] + '</p>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<button class="btn btn--standard btn--yellow mx-auto"> 查看講者 <i class="icon icon-chevron-down"></i></button>';
				}
				agendaItem += '</div><div class="agenda-img agenda-img-landscape mt-md-60 mt-30"><img src="assets/images/agenda/' + agenda[f]["img-1"] + '" alt="' + agenda[f]["title"] + '"></div></div><div class="col-agenda-6"><div class="agenda-img agenda-img-verticle"><img src="assets/images/agenda/' + agenda[f]["img-2"] + '" alt="' + agenda[f]["title"] + '"></div></div></div></div></div></div>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<div class="agenda-body"><div class="container"><div class="row">';
					for (let g = 0; g < agenda[f]["speaker"].length; g++) {
						agendaItem += '<div class="speaker-item display-md-block display-flex col-md-3"><img src="assets/images/speaker/' + agenda[f]["speaker"][g]["img"] + '" alt="' + agenda[f]["speaker"][g]["nameZh"] + '" class="speaker-img mx-auto"><div class="speaker-text text-md-center"><div class="h3 mt-md-5 my-0 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameZh"] + '</div><div class="h3 my-0 pl-md-0 pl-10 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameEn"] + '</div><p class="mt-md-10 mt-5 mb-md-20 mb-10">' + agenda[f]["speaker"][g]["titleZh"] + '</p><button class="speaker-more btn btn--standard btn--outlined mx-md-auto serif font-weight-700" data-name="' + agenda[f]["speaker"][g]["nameZh"] + '">MORE</button></div></div>';
					}
					agendaItem += '</div></div></div>';
					agendaItem += '</div>';
				}
				agendaItem += '</div></div>';
				break;
			case 2:
			case 5:
			case 8:
				agendaItem += '<div class="agenda-item"><div class="container agenda-head"><div class="row"><div class="col-md-9 col-sm-10 text-center"><div class="row row-reverse"><div class="col-agenda-4 text-left"><div class="agenda-text"><div class="agenda-title h3 font-weight-500 my-0 text-md-left text-center">' + agenda[f]["title"] + '</div><p>' + agenda[f]["intro"] + '</p>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<button class="btn btn--standard btn--yellow mx-auto"> 查看講者 <i class="icon icon-chevron-down"></i></button>';
				}
				agendaItem += '</div><div class="agenda-img agenda-img-landscape mt-md-60 mt-30"><img src="assets/images/agenda/' + agenda[f]["img-1"] + '" alt="' + agenda[f]["title"] + '"></div></div><div class="col-agenda-6"><div class="agenda-img agenda-img-verticle"><img src="assets/images/agenda/' + agenda[f]["img-2"] + '" alt="' + agenda[f]["title"] + '"></div></div></div></div></div></div>';
				if ( agenda[f]["speaker"].length > 0 ) {
					agendaItem += '<div class="agenda-body"><div class="container"><div class="row">';
					for (let g = 0; g < agenda[f]["speaker"].length; g++) {
						agendaItem += '<div class="speaker-item display-md-block display-flex col-md-3"><img src="assets/images/speaker/' + agenda[f]["speaker"][g]["img"] + '" alt="' + agenda[f]["speaker"][g]["nameZh"] + '" class="speaker-img mx-auto"><div class="speaker-text text-md-center"><div class="h3 mt-md-5 my-0 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameZh"] + '</div><div class="h3 my-0 pl-md-0 pl-10 serif font-weight-700 display-md-block display-inline-block">' + agenda[f]["speaker"][g]["nameEn"] + '</div><p class="mt-md-10 mt-5 mb-md-20 mb-10">' + agenda[f]["speaker"][g]["titleZh"] + '</p><button class="speaker-more btn btn--standard btn--outlined mx-md-auto serif font-weight-700" data-name="' + agenda[f]["speaker"][g]["nameZh"] + '">MORE</button></div></div>';
					}
					agendaItem += '</div></div></div>';
					agendaItem += '</div>';
				}
				agendaItem += '</div>';
				agendaItem += '</div></div>';
				break;
			default:
		}
	}
	$('#agenda').html(agendaItem);
	$('.agenda-img-landscape').each(function(){
		let textHeight = $(this).siblings('.agenda-text').outerHeight(),
			columnImg = $(this).parent('.col-agenda-4').siblings('.col-agenda-6').children('.agenda-img-verticle').outerHeight();
		$(this).css('height', (columnImg-textHeight-60));
		$(this).css('width', (columnImg-textHeight-60)*1.33333333);
	});
	$('.agenda-text button').each(function(){
		$(this).click(function(){
			let agendaHeadTop =  $(this).parent().parent().parent().parent().parent().parent('.agenda-head').offset().top,
				agendaHeadHeight =  $(this).parent().parent().parent().parent().parent().parent('.agenda-head').outerHeight();
			$(this).toggleClass('active');
			$(this).parent().parent().parent().parent().parent().parent('.agenda-head').siblings('.agenda-body').slideToggle();
			$('html,body').animate({
				scrollTop: (agendaHeadTop+agendaHeadHeight) - (height / 4)
			}, 1000);
		});
	});
	$(".speaker-more").click(function() {
        var speakerName = $(this).data('name'),
			speaker = "";
        for (var i = 0; i < data.length; i++) {
            if (speakerName == data[i]["nameZh"]) {
                speaker += '<img class="message-img" src="assets/images/speaker/' + data[i]["img"];
                speaker += '" alt="' + data[i]["nameZh"];
                speaker += '"><div class="message-name serif font-weight-700 text-center">' + data[i]["nameZh"];
                speaker += '</div><div class="message-name serif font-weight-700 text-center">' + data[i]["nameEn"];
                speaker += '</div><div class="message-title text-center">' + data[i]["titleZh"];
                speaker += '</div><div class="message-title text-center">' + data[i]["titleEn"];
                speaker += '</div><div class="message-essay">' + data[i]["intro"];
                speaker += '</div>'
            }
        }
        $('.message-content').html(speaker);
		$('.message').fadeIn();
        return false;
    });
    $('.message-content').click(function(e) {
        e.stopPropagation();
    })
    $('.message').click(function() {
        $('.message').fadeOut();;
    })
});

function makeTimer() {
	// var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("15 July 2021 8:50:00 GMT+08:00");			
			endTime = (Date.parse(endTime) / 1000);
		var now = new Date();
			now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html("<span class=\"h1 font-weight-500 mr-md-5\">" + days + "</span><span class=\"h6\">日</span>");
		$("#hours").html("<span class=\"h1 font-weight-500 mr-md-5\">" + hours + "</span><span class=\"h6\">時</span>");
		$("#minutes").html("<span class=\"h1 font-weight-500 mr-md-5\">" + minutes + "</span><span class=\"h6\">分</span>");
		$("#seconds").html("<span class=\"h1 font-weight-500 mr-md-5\">" + seconds + "</span><span class=\"h6\">秒</span>");
}
setInterval(function() { makeTimer(); }, 1000);
