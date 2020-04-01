$(document).ready(function(){

    $('.user_text').click(function(){
        $('.user_dropdown').css('display','block');
        $(".order_dropdown").css('display','none');
    });
    $('.order_text').click(function(){
       
        $('.user_dropdown').css('display','none');
        $(".order_dropdown").css('display','block');
       
    });

    $('.info_text').click(function(){
       
        $('.user_dropdown').css('display','none');
        $(".order_dropdown").css('display','none');
       
    });

    $('.favorite_text').click(function(){
       
        $('.user_dropdown').css('display','none');
        $(".order_dropdown").css('display','none');
       
    });
    $('.ho_So').click(function(){
        $('.my_account_selection').css('display','block');
        $(".my_address_tab").css('display','none');

    });
    $('.dia_Chi').click(function(){
        $('.my_account_selection').css('display','none');
        $(".my_address_tab").css('display','block');

    });

    var myobject = {
        Value1 : '1',
        Value2 : '2',
        Value3 : '3',
        Value4 : '4',
        Value5 : '5',
        Value6 : '6',
        Value7 : '7',
        Value8 : '8',
        Value9 : '9',
        Value10 : '10',
        Value11 : '11',
        Value12 : '12',
        Value12 : '13',
        Value13 : '14',
        Value15 : '15',
        Value16 : '16',
        Value17 : '17',
        Value18 : '18',
        Value19 : '19',
        Value20 : '20',
        Value21 : '21',
        Value22 : '22',
        Value23 : '23',
        Value24 : '24',
        Value25 : '25',
        Value26 : '26',
        Value27 : '27',
        Value28 : '28',
        Value29 : '29',
        Value30 : '30',

    };
    var select = document.getElementById("example-select");
    for(var index in myobject) {
        select.options[select.options.length] = new Option(myobject[index], index);
    }

    var hb_month = {
        Value1 : '1',
        Value2 : '2',
        Value3 : '3',
        Value4 : '4',
        Value5 : '5',
        Value6 : '6',
        Value7 : '7',
        Value8 : '8',
        Value9 : '9',
        Value10 : '10',
        Value11 : '11',
        Value12 : '12',
    }
    var select2 = document.getElementById("select_moth");
    for(var dt in hb_month){
        select2.options[select2.options.length] = new Option(hb_month[dt],dt);
    }

    var hb_year = {
        Value1 : '1920',
        Value2 : '1921',
        Value3 : '1922',
        Value4 : '1923',
        Value5 : '1924',
        Value6 : '1925',
        Value7 : '1926',
        Value8 : '1927',
        Value9 : '1928',
        Value10 : '1929',
        Value11 : '1930',
        Value12 : '1931',
        Value13 : '1932',
        Value14 : '1933',
        Value15 : '1934',
        Value16 : '1935',
        Value17 : '1936',
        Value18 : '1937',
        Value19 : '1938',
        Value20 : '1939',
        Value21 : '1940',
        Value22 : '1941',
        Value23 : '1942',
        Value24 : '1943',
        Value25 : '1944',
        Value26 : '1945',
        Value27 : '1946',
        Value28 : '1947',
        Value29 : '1948',
        Value30 : '1949',
        Value31 : '1950',
        Value32 : '1951',
        Value33 : '1952',
        Value34 : '1953',
        Value35 : '1954',
        Value36 : '1955',
        Value37 : '1956',
        Value38 : '1957',
        Value39 : '1958',
        Value40 : '1959',
        Value41 : '1960',
        Value42 : '1961',
        Value31 : '1962',
        Value32 : '1963',
        Value33 : '1964',
        Value34 : '1965',
        Value35 : '1966',
        Value36 : '1967',
        Value37 : '1968',
        Value38 : '1969',
        Value39 : '1970',
        Value40 : '1971',
        Value41 : '1972',
        Value42 : '1973',
        Value43 : '1974',
        Value44 : '1975',
        Value45 : '1976',
        Value46 : '1977',
        Value47 : '1978',
        Value48 : '1979',
        Value49 : '1980',
        Value50 : '1981',
        Value51 : '1982',
        Value52 : '1983',
        Value53 : '1984',
        Value54 : '1985',
        Value55 : '1986',
        Value56 : '1987',
        Value57 : '1988',
        Value58 : '1989',
        Value59 : '1990',
        Value60 : '1991',
        Value61 : '1992',
        Value62 : '1993',
        Value63 : '1994',
        Value64 : '1995',
        Value65 : '1996',
        Value66 : '1997',
        Value67 : '1998',
        Value68 : '1999',
        Value69 : '2000',
        Value70 : '2001',
        Value71 : '2002',
        Value72 : '2003',
        Value73 : '2004',
        Value74 : '2005',
        Value75 : '2006',
        Value76 : '2007',
        Value77 : '2008',
        Value78 : '2009',
        Value79 : '2010',
        Value80 : '2011',
        Value81 : '2012',
        Value82 : '2013',
        Value83 : '2014',
        Value84 : '2015',
        Value85 : '2016',
        Value86 : '2017',
        Value87 : '2018',
        Value88 : '2019',
    }
    var select3 = document.getElementById("select_year");
    for(var hy in hb_year){
        select3.options[select3.options.length] = new Option(hb_year[hy],hy);
    }
});