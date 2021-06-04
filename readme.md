# Daiquiri Username Sanitizer

## Synopsis
The username sanitizer provides a Javascript that only allows user names fitting the following regex scheme `/^[a-z0-9_\-]*$/`. It runs on the signup page and displays a message if a user tries to enter something not matching the scheme.


## How to install?

1. Copy the js file into your daiquiri app.

    Make sure the folder structure is correct to be able to use it later on. It has to go into your app folder to `static/core/js/username_sanitizer.js`

1. Load the copied Javascript into the page that displays the sighnup form.

    For example by adding the snippet below to even this page. If you don't have a signup page template you could also put it into your footer `app/templates/core/base_footer.html`.

    ```html
    <script src="/static/core/js/username_sanitizer.js"></script>
    ```

1. Finally run collect static

    ```shell
    python3 manage.py collectstatic
    ```
