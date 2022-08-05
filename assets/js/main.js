(function ($) {
	('use strict');

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($('#spinner').length > 0) {
				$('#spinner').removeClass('show');
			}
		}, 1);
	};
	spinner();

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	// Sidebar Toggler
	$('.sidebar-toggler').click(function () {
		$('.sidebar, .content').toggleClass('open');
		return false;
	});

	// Progress Bar
	$('.pg-bar').waypoint(
		function () {
			$('.progress .progress-bar').each(function () {
				$(this).css('width', $(this).attr('aria-valuenow') + '%');
			});
		},
		{ offset: '80%' }
	);

	// Chart Global Color
	Chart.defaults.color = '#6C7293';
	Chart.defaults.borderColor = '#000000';

	// Worldwide Sales Chart
	var ctx1 = $('#worldwide-sales').get(0).getContext('2d');
	var myChart1 = new Chart(ctx1, {
		type: 'bar',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
			],
			datasets: [
				{
					label: 'USA',
					data: [15, 30, 55, 65, 60, 80, 95, 30],
					backgroundColor: 'rgb(208, 72, 182, .7)',
				},
				{
					label: 'UK',
					data: [8, 35, 40, 60, 70, 55, 75, 42],
					backgroundColor: 'rgb(208, 72, 182, .5)',
				},
				{
					label: 'AU',
					data: [12, 25, 45, 55, 65, 70, 60, 25],
					backgroundColor: 'rgb(208, 72, 182, .3)',
				},
			],
		},
		options: {
			responsive: true,
		},
	});

	// Salse & Revenue Chart

	var ctx2 = $('#salse-revenue').get(0).getContext('2d');
	var myChart2 = new Chart(ctx2, {
		type: 'line',
		data: {
			labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
			datasets: [
				{
					label: 'Sales',
					data: [15, 30, 55, 45, 70, 65, 85],
					backgroundColor: 'rgb(31, 142, 241, .7)',
					fill: true,
				},
				{
					label: 'Revenue',
					data: [99, 135, 170, 130, 190, 180, 270],
					backgroundColor: 'rgb(31, 142, 241, .5)',
					fill: true,
				},
			],
		},
		options: {
			responsive: true,
		},
	});

	// Single Line Chart
	var ctx3 = $('#line-chart').get(0).getContext('2d');
	var myChart3 = new Chart(ctx3, {
		type: 'line',
		data: {
			labels: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
			],
			datasets: [
				{
					label: 'Sales',
					fill: true,
					borderColor: 'rgb(166, 126, 8)',
					backgroundColor: 'rgb(166, 126, 8, .2)',
					data: [10000, 20000, 43000, 56000, 90000, 120000, 65000, 32000],
					tension: 0.5,
				},
			],
		},
		options: {
			responsive: true,
		},
	});

	// Doughnut Chart
	var ctx6 = $('#doughnut-chart').get(0).getContext('2d');
	var myChart6 = new Chart(ctx6, {
		type: 'pie',
		data: {
			labels: ['Buyers', 'Sellers', 'Inactive'],
			datasets: [
				{
					backgroundColor: [
						'rgb(29 139 74) ',
						'rgb(199 115 20) ',
						'rgb(235 22 22)',
					],
					data: [615, 339, 140],
				},
			],
		},
		options: {
			responsive: false,
			borderColor: 'transparent',
		},
	});

	// Calender
	$('#calender').datetimepicker({
		inline: true,
		format: 'L',
	});
})(jQuery);
