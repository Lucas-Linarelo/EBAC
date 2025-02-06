document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const resposElement = document.querySelector('#reps');
    const followersElement = document.querySelector('#f-ers');
    const followingElement = document.querySelector('#f-ing');
    const LinkElement = document.querySelector('#link');

    let gitUsername = 'Lucas-Linarel';

    function fetchGithubData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(function (resposta) {
                if (!resposta.ok) {
                    alert("Ocorreu um erro na API. O usuário GitHub estava incorreto. Vou corrigir.");
                    
                    setTimeout(function () {
                        gitUsername = 'Lucas-Linarelo';
                        fetchGithubData(gitUsername);
                    }, 500);

                    return null;
                }
                return resposta.json();
            })
            .then(function (json) {
                if (json) {
                    nameElement.innerText = json.name;
                    userNameElement.innerText = json.login;
                    avatarElement.src = json.avatar_url;
                    resposElement.innerText = json.public_repos;
                    followersElement.innerText = json.followers;
                    followingElement.innerText = json.following;
                    LinkElement.href = json.html_url;
                }
            })
            .catch(function () {
                alert("Ocorreu um erro ao carregar as informações do GitHub. Tente novamente.");
            });
    }

    fetchGithubData(gitUsername);
});
