# Daiquiri Username Sanitizer

## Synopsis
The username sanitizer provides a Javascript that only allows user names fitting the following regex scheme `/^[a-z0-9_\-]*$/`. It runs on the signup page and displays a message if a user tries to enter something not matching the scheme.


## How to install?

1. Copy the js file into your daiquiri app. Make sure the folder structure is correct to be able to use it later on. It has to go to your app folder into `static/core/js/`

    Using docker you could do something like

    ```shell
    docker cp username_sanitizer.js  dqdocker:/home/dq/app/static/core/js/
    ```

2. Load the copied javascript into your html form.

    For example by adding the following to your footer `app/templates/core/base_footer.html`.

    ```html
    <script src="/static/core/js/username_sanitizer.js"></script>
    ```

3. Finally run collect static

    ```shell
    python3 manage.py collectstatic
    ```
