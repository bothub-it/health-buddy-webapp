<template>

    <div class="footer">
        <div class="footer__wrapper">
        <a href="https://www.ilhasoft.com/"> 
HealthBuddy is powered by Bothub © 2020 All rights reserved.
 </a>
     <a href="https://healthbuddy.info/policy.html"> Privacy Policy </a>
     </div>
    </div>

</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        color: #47536e;
        font-size: 14px;
        background: white;
        padding: 2rem;

        &__wrapper {
            margin: 0 auto;
            max-width: 1140px;
            display: flex;
            column-gap: 50px;
            flex-wrap: wrap;
        }

        a {
            color: #1CABE2;
        }

        a:hover {
            color: #7b94c9;
        }
    }
</style>