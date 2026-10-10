//================ NAVBAR ================//

const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {

    navbar.classList.toggle('scrolled', window.scrollY > 80)

})


//================ CONTADOR ================//

const contadores = document.querySelectorAll('.contador-numero')

contadores.forEach(contador => {

    const alvo = Number(contador.dataset.target)
    let atual = 0

    const atualizar = () => {

        const incremento = Math.ceil(alvo / 120)

        atual += incremento

        if (atual < alvo) {

            contador.textContent = atual

            setTimeout(atualizar, 20)

        } else {

            contador.textContent = alvo

        }

    }

    atualizar()

})


//================ BOTÃO VOLTAR AO TOPO ================//

const btnTopo = document.getElementById('btnTopo')

window.addEventListener('scroll', () => {

    btnTopo.style.display = window.scrollY > 500 ? 'flex' : 'none'

})

btnTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

})