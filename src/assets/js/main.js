
!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  /*$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      $('#header').addClass('header-scrolled');
      $('#logoo').addClass('logo2');
      $('#logoo').removeClass('logo');
      $('#nav').addClass('nav-menu2');
      $('#nav').removeClass('nav-menu');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#logoo').addClass('logo');
      $('#logoo').removeClass('logo2');
      $('#nav').addClass('nav-menu');
      $('#nav').removeClass('nav-menu2');
    }
  });*/
  function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        var scrollto = target.offset().top;
        var scrolled = 20;
        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()
          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    margin: 25,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  function chooseLanguageNavbar(lang) {
    if(lang === 'pt') {
      let br_object_navbar = {home: 'Inicio', hiw: 'Como funciona', about: 'Sobre', iv: 'Vídeos Informativos'}
      $('#nav_home').text(br_object_navbar.home);
      $('#nav_hiw').text(br_object_navbar.hiw);
      $('#nav_about').text(br_object_navbar.about);
      $('#nav_iv').text(br_object_navbar.iv);
    } else if(lang === 'en') {
      let en_object_navbar = {home: 'Home', hiw: 'How it Works', about: 'About', iv: 'Informative Videos'}
      $('#nav_home').text(en_object_navbar.home);
      $('#nav_hiw').text(en_object_navbar.hiw);
      $('#nav_about').text(en_object_navbar.about);
      $('#nav_iv').text(en_object_navbar.iv);
    } else if(lang === 'ru') {
      let ru_object_navbar = {home: 'Дом', hiw: 'Как это устроено', about: 'Около', iv: 'Информационные видео'}
      $('#nav_home').text(ru_object_navbar.home);
      $('#nav_hiw').text(ru_object_navbar.hiw);
      $('#nav_about').text(ru_object_navbar.about);
      $('#nav_iv').text(ru_object_navbar.iv);
    }
    chooseLanguageTitles(lang);
  }

  function chooseLanguageTitles(lang) {
    if(lang === 'pt') {
      let br_object_titles = {hiw: 'Como funciona', about: 'O que é HealthBuddy', iv: 'Videos Informativos'}
      $('#title_hiw').text(br_object_titles.hiw);
      $('#title_about').text(br_object_titles.about);
      $('#title_iv').text(br_object_titles.iv);
    } else if(lang === 'en') {
      let en_object_titles = {hiw: 'How it Works', about: 'What is HealthBuddy', iv: 'Informative Videos'}
      $('#title_hiw').text(en_object_titles.hiw);
      $('#title_about').text(en_object_titles.about);
      $('#title_iv').text(en_object_titles.iv);
    } else if(lang === 'ru') {
      let ru_object_titles = {hiw: 'Как это устроено', about: 'Что такое HealthBuddy', iv: 'Информационные видео'}
      $('#title_hiw').text(ru_object_titles.hiw);
      $('#title_about').text(ru_object_titles.about);
      $('#title_iv').text(ru_object_titles.iv);
    }
    chooseLanguageInfo(lang);
  }

  function chooseLanguageInfo(lang) {
    if(lang === 'pt') {
      let br_object_info = {hiw: 'Você pode iniciar a conversa fazendo perguntas naturalmente na janela de bate-papo ou selecionar uma das perguntas da lista. O HealthBuddy fornecerá informações sobre o Covid-19 e responderá a qualquer outra pergunta relacionada a ele. Você também pode denunciar rumores e enviar qualquer pergunta que seja respondida por nossos especialistas e publicada neste portal.', about: 'O HealthBuddy é uma poderosa ferramenta de inteligência artificial que pode ajudá-lo a aprender sobre o novo Coronavírus (COVID-19) e como se proteger e a outros, conforme as evidências mais recentes. Existem muitos mitos e informações erradas sobre o novo Coronavírus disseminado na Internet e nas mídias sociais. É por isso que é importante ter cuidado ao procurar informações e conselhos! Este consultor de saúde virtual fornecerá informações úteis sobre o COVID-19 e dicas sobre como se proteger e a outras pessoas e como reduzir o risco de infecção.'}
      $('#info_hiw').text(br_object_info.hiw);
      $('#info_about').text(br_object_info.about);
    } else if(lang === 'en') {
      let en_object_info = {hiw: 'You can start the conversation by asking questions naturally in the chat window or select one of the questions from the list, the HealthBuddy will give you information about Covid-19 and respond to any other question related to it. You can also report Rumors and send any question which will be answered by our experts and published on this portal.', about: 'HealthBuddy is a powerful artificial intelligence tool that can help you learn about the new Coronavirus (COVID-19) and how to protect yourself and others from it as per the latest evidence. There are a lot of myths and misinformation about the new Coronavirus disseminated on internet and social media. This is why it’s important to be careful where you look for information and advice! This virtual health advisor will provide you with useful information on COVID-19 and tips on how to protect yourself and others and how reduce the risk of infection.'}
      $('#info_hiw').text(en_object_info.hiw);
      $('#info_about').text(en_object_info.about);
    } else if(lang === 'ru') {
      let ru_object_info = {hiw: 'Вы можете начать беседу, задав естественные вопросы в окне чата или выбрав один из вопросов из списка, HealthBuddy предоставит вам информацию о Covid-19 и ответит на любой другой вопрос, связанный с ним. Вы также можете сообщить Слухи и отправить любой вопрос, на который ответят наши эксперты и опубликовать на этом портале.', about: 'HealthBuddy - это мощный инструмент искусственного интеллекта, который может помочь вам узнать о новом коронавирусе (COVID-19) и о том, как защитить себя и других от него, согласно последним данным. Существует много мифов и дезинформации о новом Коронавирусе, распространенном в Интернете и социальных сетях. Вот почему важно быть осторожным, когда вы ищете информацию и советы! Этот виртуальный консультант по вопросам здоровья предоставит вам полезную информацию о COVID-19 и советы о том, как защитить себя и других и как снизить риск заражения.'}
      $('#info_hiw').text(ru_object_info.hiw);
      $('#info_about').text(ru_object_info.about);
    }
    chooseLanguageFeatures(lang);
  }

  function chooseLanguageFeatures(lang) {
    if(lang === 'pt') {
      let br_object_features_title = {one: 'Suporte multicanal', two: 'Suporte multilíngue', three: 'Facilmente integrável com outras plataformas', four: 'Denunciar Fake News (em breve)'};
      let br_object_features_subtitle =  {one: 'integrar com a rede social, mensagens instantâneas, SMS, chamadas de voz e muito mais', two: 'O HealthBuddy detectará automaticamente o idioma do seu navegador e, se houver suporte, falará automaticamente nesse idioma.', three: 'Veja como as pessoas classificam o HealthBuddy em todos os canais disponíveis', four:'Relate boatos ou declarações falsas que você está vendo em sua região para manter outras pessoas informadas e veja uma explicação detalhada aqui.'};
      $('#title_feature1').text(br_object_features_title.one);
      $('#title_feature2').text(br_object_features_title.two);
      $('#title_feature3').text(br_object_features_title.three);
      $('#title_feature4').text(br_object_features_title.four);

      $('#subtitle_feature1').text(br_object_features_subtitle.one);
      $('#subtitle_feature2').text(br_object_features_subtitle.two);
      $('#subtitle_feature3').text(br_object_features_subtitle.three);
      $('#subtitle_feature4').text(br_object_features_subtitle.four);
    } else if(lang === 'en') {
      let en_object_features_title = {one: 'Multi-channel support' , two: 'Multi-language support', three: 'Easily integratable with other platforms', four: 'Report fake news (coming soon)'};
      let en_object_features_subtitle =  {one: 'integrate with social network, instant messengers, SMS, voice calls and more', two: 'HealthBuddy will automatically detect the language of your page and, if supported, will automatically speak in that language.', three: 'See how people are rating the HealthBuddy across all channels it is available', four: 'Report rumors or fake statements you’re seeing around your region to keep others informed and see a detailed explanation here'};
      $('#title_feature1').text(en_object_features_title.one);
      $('#title_feature2').text(en_object_features_title.two);
      $('#title_feature3').text(en_object_features_title.three);
      $('#title_feature4').text(en_object_features_title.four);

      $('#subtitle_feature1').text(en_object_features_subtitle.one);
      $('#subtitle_feature2').text(en_object_features_subtitle.two);
      $('#subtitle_feature3').text(en_object_features_subtitle.three);
      $('#subtitle_feature4').text(en_object_features_subtitle.four);
    } else if(lang === 'ru') {
      let ru_object_features_title = {one: 'Многоканальная поддержка' , two: 'Многоязычная поддержка', three: 'Легко интегрируется с другими платформами', four: 'Сообщить о поддельных новостях (скоро)'};
      let ru_object_features_subtitle =  {one: 'интеграция с социальной сетью, мессенджерами, смс, голосовыми звонками и многим другим', two: 'HealthBuddy автоматически определяет язык вашего браузера и, если поддерживается, автоматически говорит на этом языке.', three: 'Посмотрите, как люди оценивают HealthBuddy по всем доступным каналам', four: 'Сообщайте о слухах или фальшивых заявлениях, которые вы видите в своем регионе, чтобы информировать других и увидеть подробное объяснение здесь.'};
      $('#title_feature1').text(ru_object_features_title.one);
      $('#title_feature2').text(ru_object_features_title.two);
      $('#title_feature3').text(ru_object_features_title.three);
      $('#title_feature4').text(ru_object_features_title.four);

      $('#subtitle_feature1').text(ru_object_features_subtitle.one);
      $('#subtitle_feature2').text(ru_object_features_subtitle.two);
      $('#subtitle_feature3').text(ru_object_features_subtitle.three);
      $('#subtitle_feature4').text(ru_object_features_subtitle.four);
    }
    chooseLanguageFooterHeader(lang)
  }

  function chooseLanguageFooterHeader(lang) {
    if(lang === 'pt') {
      let br_object_footer = {copyright: 'HealthBuddy é alimentado por Bothub © 2020 Todos os direitos reservados.', policy: 'Clique aqui para ver nossa política de privacidade'}
      let br_object_header = {slogan: 'Seu próprio amigo para obter informações sobre COVID-19.  A apenas uma mensagem de texto de distância!'}
      $('#copyright').text(br_object_footer.copyright);
      $('#policy').text(br_object_footer.policy);
      $('#header-slogan').text(br_object_header.slogan);
    } else if(lang === 'en') {
      let en_object_footer = {copyright: 'HealthBuddy is powered by Bothub © 2020 All rights reserved.', policy: 'Click here to see our privacy policy'}
      let en_object_header = {slogan: 'Your very own buddy for info about COVID-19. Just a text message away!'}
      $('#copyright').text(en_object_footer.copyright);
      $('#policy').text(en_object_footer.policy);
      $('#header-slogan').text(en_object_header.slogan);
    } else if(lang === 'ru') {
      let ru_object_footer = {copyright: 'HealthBuddy работает на платформе Bothub © 2020 Все права защищены.', policy: 'Нажмите здесь, чтобы увидеть нашу политику конфиденциальности'}
      let ru_object_header = {slogan: 'Ваш собственный приятель за информацию о COVID-19. Просто текстовое сообщение прочь!'}
      $('#copyright').text(ru_object_footer.copyright);
      $('#policy').text(ru_object_footer.policy);
      $('#header-slogan').text(ru_object_header.slogan);
    }
    chooseLanguagePrivacy(lang);
    //
  }

  function chooseLanguagePrivacy(lang) {
    if(lang === 'pt') {
      $('#privacy-title').text('Política de Privacidade');
      $('#privacy-text1').show();
      $('#privacy-text2').hide();
      $('#privacy-text3').hide();
    } else if(lang === 'en') {
      $('#privacy-title').text('Privacy Policy');
      $('#privacy-text1').hide();
      $('#privacy-text2').show();
      $('#privacy-text3').hide();
    } else if(lang === 'ru') {
      $('#privacy-title').text('политика конфиденциальности');
      $('#privacy-text1').hide();
      $('#privacy-text2').hide();
      $('#privacy-text3').show();
    }
    console.log('sending: ');
    WebChat.send("hello "+lang);
  }

  $('.dropdown-item').click(function() {
    chooseLanguageNavbar($(this).attr('value'))
  });

  $('#webchat > .conversation-container > .header > .close-button').click(function() {
    resizeText(WebChat.isOpen());
  });

  function resizeText(isOpen) {
    if(isOpen === false && !isMobile()) {
      $('#gallery').addClass('gallery');
      $('#gallery').removeClass('gallery2');

      $('#features').addClass('features');
      $('#features').removeClass('features2');
    } else {
      $('#gallery').addClass('gallery2');
      $('#gallery').removeClass('gallery');

      $('#features').addClass('features2');
      $('#features').removeClass('features');
    }
  }

  function detectMob() {
    return ( ( window.innerWidth <= 992 ));
  }
  // Initiate venobox lightbox
  function doPoll(){
      resizeText(WebChat.isOpen())
        setTimeout(doPoll,1200);
}

  $(document).ready(function() {
    if(!isMobile()) {
        doPoll();
    }
    $('#wave .dot').text('Typing...');
    $('.venobox').venobox();
    $('#privacy-text1').hide();
    $('#privacy-text2').show();
    $('#privacy-text3').hide();
    function openChat() {
      var detector = detectMob();

      if (!WebChat.isOpen() && !isMobile()) {
        WebChat.open();
      }
    }
    setTimeout(openChat, 1000);
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);
