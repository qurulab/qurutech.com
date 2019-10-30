/* esling-disable */
jQuery(document).ready(function() {
  'use strict'

  /* -------------------------------------
    Navigation Settings
    ------------------------------------- */
  function navControl() {
    if ($(window).width() < 992) {
      $(document).on('click', function(event) {
        const clickover = $(event.target)
        const _opened = $('#navbarSupportedContent').hasClass('show')
        if (_opened === true && !clickover.is('.dropdown, .dropdown *')) {
          $('button.navbar-toggler').trigger('click')
        }
      })
      $('#navbarSupportedContent .dropdown>a').unbind('click')
      $('#navbarSupportedContent .dropdown>a').on('click', function(e) {
        e.preventDefault()
        $(this)
          .toggleClass('sm-shown')
          .siblings('.dropdown-menu')
          .slideToggle()
      })

      $('#navbarSupportedContent .dropdown a *').on('click', function(e) {
        e.stopPropagation()
      })
    } else {
      $('#navbarSupportedContent .dropdown-menu').css('display', 'block')
    }
  }
  navControl()
  $(window).on('resize orientationchange', function() {
    navControl()
  })
  /* --------------------------------------------
    		Toggle Settings
    --------------------------------------------- */
  $('.favorite-coin').on('click', function() {
    $(this).toggleClass('active')
  })
  /* --------------------------------------------
        Updating Chart
    --------------------------------------------- */

  const updatingChartOne = $('.updating-chart-one').peity('line', {
    width: 60,
    height: 70,
    fill: 'rgba(0,93,98,.30)',
    stroke: '#00c162'
  })
  setInterval(function() {
    const random = Math.round(Math.random() * 10)
    const values = updatingChartOne.text().split(',')
    values.shift()
    values.push(random)
    updatingChartOne.text(values.join(',')).change()
  }, 1000)

  const updatingChartTwo = $('.updating-chart-two').peity('line', {
    width: 60,
    height: 70,
    fill: 'rgba(220,0,0,.20)',
    stroke: '#dd1900'
  })
  setInterval(function() {
    const random = Math.round(Math.random() * 10)
    const values = updatingChartTwo.text().split(',')
    values.shift()
    values.push(random)
    updatingChartTwo.text(values.join(',')).change()
  }, 1000)

  const updatingChartThree = $('.updating-chart-three').peity('line', {
    width: 60,
    height: 70,
    fill: 'rgba(220,0,0,.20)',
    stroke: '#dd1900'
  })
  setInterval(function() {
    const random = Math.round(Math.random() * 10)
    const values = updatingChartThree.text().split(',')
    values.shift()
    values.push(random)
    updatingChartThree.text(values.join(',')).change()
  }, 1000)

  const updatingChartFour = $('.updating-chart-four').peity('line', {
    width: 60,
    height: 70,
    fill: 'rgba(0,93,98,.30)',
    stroke: '#00c162'
  })
  setInterval(function() {
    const random = Math.round(Math.random() * 10)
    const values = updatingChartFour.text().split(',')
    values.shift()
    values.push(random)
    updatingChartFour.text(values.join(',')).change()
  }, 1000)
  /* --------------------------------------------
        Latest News Settings
    --------------------------------------------- */
  $('#news_headlines_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })
  /* --------------------------------------------
    		Slim-scrollbar Settings
    --------------------------------------------- */
  $('.dashboard-ticker-block-three').slimScroll({
    height: '570px'
  })

  $('.dashboard-ticker-block-four').slimScroll({
    height: '570px'
  })
  /* -------------------------------------
    Slick slider Settings
    ------------------------------------- */
  $('#testimonial').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  })
  /* -------------------------------------
    Height assign
    ------------------------------------- */
  const divHeight = $('.map-block').height()
  $('.contact-info-block').css('min-height', divHeight + 'px')
})
