<template>
    <footer class="mt-3 mb-0 pb-0">
        <div class="container-fluid justify-content-center text-center pb-0 mb-0 text-muted">
            <ul class="nav footer-nav justify-content-center m-3">
                <li class="nav-item mx-2">
                    <router-link to="/about" class="text-muted">About</router-link>
                </li>
                <li class="nav-item mx-2">
                    <router-link to="/contact" class="text-muted">Contact</router-link>
                </li>
            </ul>
            <p class="my-1 small">
                Designed and develop by <a href="https://thebears.cn" target="_blank">TheBears</a>.
            </p>
            <p class="copyright mt-2 text-muted small">&copy; 2020 <a href="https://dev.iluckin.cn">iLuckin.Cn</a>.</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'note-footer'
    }
</script>

<style>
    footer {
        background: -webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#f6f6f6));
        background: linear-gradient(180deg, #ffffff, #f6f6f6);
        color: #575757;
        font-weight: 400;
        overflow: hidden;

    }
    .footer-nav .nav-item a {
        text-decoration: none;
        color: #a7a7a7;
        font-size: .90rem;
    }

    footer p a {
        color: #a7a7a7;
    }

    footer .copyright {
        color: #575757;
    }

    footer .copyright a {
        color: #575757;
    }
</style>