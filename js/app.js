$$.json(
	'http://financeiro.doctum.edu.br/notasMobile.php',
	{aluno:"130600012"},
	function(dados) {
		for(var disciplina in dados){
			/**
			* Montando Menu-lateral
			**/
			$$('#aside-itens').append('\
				<li data-view-article="'+dados[disciplina].abrev+'" data-icon="list"> \
					<strong>'+disciplina+'</strong> \
				</li>'
			);
			$$('#aside-itens').append('\
				<li data-view-article="'+dados[disciplina].abrev+'" data-icon="list"> \
					<strong>'+disciplina+'</strong> \
				</li>'
			);
			$$('#aside-itens').append('\
				<li data-view-article="'+dados[disciplina].abrev+'" data-icon="list"> \
					<strong>'+disciplina+'</strong> \
				</li>'
			);
			
			/**
			* Montando página inicial
			**/
			if (parseFloat(dados[disciplina].nota)<70) {
				cor = 'red';
			} else{
				cor = 'blue';
			}
			$$('#home-itens').append('\
				<li>\
					<div class="on-right grade "> <span class="'+cor+'">'+dados[disciplina].nota+'</span></div>\
					<strong>'+disciplina+'</strong>\
					<!--<small>Nota: <span class="'+cor+'">'+dados[disciplina].nota+'</span></small>-->\
				</li>'
			);
$$('#home-itens').append('\
				<li>\
					<div class="on-right grade "> <span class="'+cor+'">'+dados[disciplina].nota+'</span></div>\
					<strong>'+disciplina+'</strong>\
					<!--<small>Nota: <span class="'+cor+'">'+dados[disciplina].nota+'</span></small>-->\
				</li>'
			);
$$('#home-itens').append('\
				<li>\
					<div class="on-right grade "> <span class="'+cor+'">'+dados[disciplina].nota+'</span></div>\
					<strong>'+disciplina+'</strong>\
					<!--<small>Nota: <span class="'+cor+'">'+dados[disciplina].nota+'</span></small>-->\
				</li>'
			);

			/**
			* Montando paginas das disciplinas
			**/

			$$('#main').append('\
				<article class="list indented" id="'+dados[disciplina].abrev+'">\
					<li class="">Agendamentos</li>\
				</article>'
			);

			/**
			* Montando os agendamentos das disciplinas
			**/
			i=0;
			agendamentos='';
			for(var etapa in dados[disciplina].etapas){
				
				/**
				* Montado etapas
				**/
				agendamentos=agendamentos+'\
					<li class="theme">\
						<div class="on-right grade "> <span class="'+cor+'">'+dados[disciplina].etapas[etapa].nota+'</span></div>\
						'+etapa+'\
					</li>\
					<ul id="#agenda-'+dados[disciplina].abrev+'-'+i+'">';

				for (var agendamento in dados[disciplina].etapas[etapa].agenda){
					agendamentos = agendamentos + '\
						<li>\
							<div class="on-right grade "> <span class="'+cor+'">'+dados[disciplina].etapas[etapa].agenda[agendamento].nota+'</span></div>\
							<strong>'+agendamento+'</strong>\
							<small>Data: '+dados[disciplina].etapas[etapa].agenda[agendamento].data+'</small>\
							<small>Valor: '+dados[disciplina].etapas[etapa].agenda[agendamento].valor+'</small>\
						</li>'
					;
				}

				agendamentos=agendamentos+'\
					</ul>'
				
				
				
				i++;
			}
			$$('#'+dados[disciplina].abrev).append(agendamentos);
			//if(Lungo.Core.environment().os.name.toLowerCase() === 'android') {
			 // $$($$('#timeline-article')[0]).css('overflow-y', 'hidden');
			  // Browser must be allowed perform stuff from the hidden first so we delay the revert
			 /* setTimeout(function() { 
			    	$$($$('#timeline-article')[0]).css('overflow-y', 'scroll');
			  }, 1);*/
			//}
		}
	}
);

