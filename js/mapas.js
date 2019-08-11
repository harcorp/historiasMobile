(function() {
    google.charts.load('current', {
        packages: ['corechart', 'bar']
    });
    google.charts.setOnLoadCallback(drawBarColors);
    google.charts.setOnLoadCallback(drawMultSeries);

    $('.containerMapa').on('touchstart touchend', 'path', function(e) {
        let $this = $(e.currentTarget);
        let name = $this.attr('name');
        let $message = $(".message");
        if (e.type === 'touchstart') {
            $this.addClass('over');
            $message.addClass('show');
            name = `${name}: <b>${getDepartmentCount(name)}</b>`;
            $message.html(name);
            var touchX = e.originalEvent.touches[0].pageX;
            var touchY = e.originalEvent.touches[0].pageY;
            $message.css({
                "top": touchY,
                "left": touchX + 25
            });
        } else if (e.type === 'touchend') {
            $message.removeClass('show');
            $this.removeClass('over');
        }
    });

    function getDepartmentCount(department) {
        switch (department) {
            case 'San Andrés y Providencia':
                department = 1;
                break;
            case 'Amazonas':
                department = 1;
                break;
            case 'Guaviare':
                department = 1;
                break;
            case 'Chocó':
                department = 3;
                break;
            case 'La Guajira':
                department = 3;
                break;
            case 'Quindío':
                department = 7;
                break;
            case 'Boyacá':
                department = 7;
                break;
            case 'Putumayo':
                department = 7;
                break;
            case 'Caquetá':
                department = 10;
                break;
            case 'Nariño':
                department = 13;
                break;
            case 'Casanare':
                department = 13;
                break;
            case 'Caldas':
                department = 13;
                break;
            case 'Córdoba':
                department = 14;
                break;
            case 'Risaralda':
                department = 20;
                break;
            case 'Sucre':
                department = 21;
                break;
            case 'Cundinamarca':
                department = 27;
                break;
            case 'Meta':
                department = 22;
                break;
            case 'Cauca':
                department = 29;
                break;
            case 'Atlántico':
                department = 30;
                break;
            case 'Antioquia':
                department = 31;
                break;
            case 'Arauca':
                department = 33;
                break;
            case 'Tolima':
                department = 51;
                break;
            case 'Bolívar':
                department = 54;
                break;
            case 'Magdalena':
                department = 58;
                break;
            case 'Cesar':
                department = 78;
                break;
            case 'Huila':
                department = 84;
                break;
            case 'Bogota':
                department = 96;
                break;
            case 'Norte de Santander':
                department = 136;
                break;
            case 'Santander':
                department = 144;
                break;
            case 'Valle del Cauca':
                department = 161;
                break;
            default:
                department = 0;
                break;
        }
        return department
    }


    function drawBarColors() {
        var data = google.visualization.arrayToDataTable([
            ['Año', 'Numero de Casos', { role: 'annotation' }],
            ['2015', 3, '0,8%'],
            ['2016', 3, '0,8%'],
            ['2017', 13, '5,2%'],
            ['2018 (1er semestre)', 8, '3,2%']
        ]);

        var options = {
            title: 'Número de Casos de Lepra en Cundinamarca.',
            subtitle: 'Ministerio de Salud, Informe del evento lepra, periodo epidemiólogico VI. Colombia, 2018',
            width: '100%',
            chartArea: { width: '70%' },
            colors: ['#f1b059'],
            'height': 400,
            titleTextStyle: {
                color: '#ffffff',
                fontSize: 18,
            },
            hAxis: {
                title: 'Porcentajes de Casos',
                subtitle: 'Ministerio de Salud, Informe del evento lepra, periodo epidemiólogico VI. Colombia, 2018',
                minValue: 0,
                textStyle: {
                    color: '#ffffff'
                },
                titleTextStyle: {
                    color: '#ffffff'
                },
            },
            vAxis: {
                title: 'Año',
                textStyle: {
                    color: '#ffffff'
                },
                titleTextStyle: {
                    color: '#ffffff'
                },
            },
            annotations: {
                textStyle: {
                    color: '#ffffff',
                    bold: true
                }
            },
            backgroundColor: 'none',
            legend: {
                textStyle: {
                    color: '#ffffff'
                },
                position: 'none'
            },
            animation: {
                duration: 5000,
                easing: 'out',
                startup: true
            },
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }

    function drawMultSeries() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Año');
        data.addColumn('number', 'Casos de Lepra');
        data.addColumn('number', 'Casos nuevos');

        data.addRows([
            ['2008', 680, 445],
            ['2009', 868, 468],
            ['2010', 868, 468],
            ['2010', 558, 295],
            ['2011', 718, 434],
            ['2012', 620, 392],
            ['2013', 584, 430],
            ['2014', 0, 0],
            ['2015', 393, 357],
            ['2016', 355, 313],
            ['2017', 402, 358],
            ['2018', 150, 131]
        ]);

        var options = {
            title: 'Estadísticas de la Lepra en Colombia.',
            subtitle: 'Ministerio de Salud, Informe del evento lepra, periodo epidemiólogico VI. Colombia, 2018',
            backgroundColor: 'none',
            colors: ['#f1b059', '#b26100'],
            titleTextStyle: {
                color: '#ffffff',
                fontSize: 18,
            },
            'height': 400,
            chartArea: { width: '70%' },
            hAxis: {
                title: 'Año',
                textStyle: {
                    color: '#ffffff'
                },
                titleTextStyle: {
                    color: '#ffffff'
                },
            },
            vAxis: {
                title: 'No. de casos',
                textStyle: {
                    color: '#ffffff'
                },
                titleTextStyle: {
                    color: '#ffffff'
                },
            },
            annotations: {
                textStyle: {
                    color: '#ffffff',
                    bold: true
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            animation: {
                duration: 5000,
                easing: 'out',
                startup: true
            }
        };

        var container = document.getElementById('chart_div_2');
        var chart = new google.visualization.ColumnChart(container);
        chart.draw(data, options);
    }
})(jQuery);