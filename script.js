document.addEventListener('DOMContentLoaded', function ()
{
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    function toggleTheme()
    {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme'))
        {
            themeToggle.textContent = 'Light';
        }
        else
        {
            themeToggle.textContent = 'Dark';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
});



function page_change(page) {
    document.getElementById("title1").innerHTML = page;
}

function popup(message) {
    window.alert(message);
}

function print(message) {
    console.log(message);
}