# Basic vue app

This app has been set up with the following:
- Vue 3.2, witch supports postcss 8.0 that fixes tailwind 3.0 compatibility issues. It also supports `<script setup>` syntax in composition API:
    ```vue
    <script setup>
    
    </script>
    ```
    learn more about `<script setup>` syntax [here](https://vuejs.org/api/sfc-script-setup.html) and [here](https://www.youtube.com/watch?v=9uSNKIXH_AI)  
     <br/>
- Tailwind 3 using postcss 8.0 to discard the need of input output build process, and to support the usage of tailwind classes in style tags in vue components:
    ```scss
    <style>
  
    p{
      @apply my-4 mx-12;
      // style that is not supported by tailwind
    }
  
    </style>
    ```  
  <br/>
- Vue i18n 9.1 internationalization plugin of Vue, with the support of making locals within the same component using `<i18n>` tag as following:
  ```vue
    <i18n>
  
    {
      "en": {
        "hello": "Hello world!"
      },
      "ar": {
        "hello": "مرحبا بالعالم"
      }
    }
  
    </i18n>
  ```
  Read more about this [here](https://kazupon.github.io/vue-i18n/guide/sfc.html#scoped-style)  
    <br/>
  Note: If you are using vue 3 composition api, make sure to chang `legacy` to `false` in `i18n.js` file:
    ```js
    export default createI18n({
    legacy: false, // for vue 3 composition api
    globalInjection: true,
    locale: process.env.VUE_APP_I18N_LOCALE || "en",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: loadLocaleMessages(),
    });
    ```
  <br/>
- Pinia Vue store witch is officially the recommended vue store from the vue dev team. Learn more about it [here](https://pinia.vuejs.org/) and [here](https://www.youtube.com/watch?v=Ok6vO98RV_Q)

<br/>

### Project setup
```
npm install
```
<br/>

#### Compiles and hot-reloads for development
```
npm run serve
```
<br/>

#### Compiles and minifies for production
```
npm run build
```
<br/>

#### Lints and fixes files
```
npm run lint
```
<br/>

License [MIT](https://choosealicense.com/licenses/mit/)
