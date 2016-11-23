# ng2-template
Angular 2 Demo app with multiple routes/views.

Begin by setting up your project following the instructions in the "Getting Started" project here: https://github.com/rlewis2892/ng-demo Once you have everything up and running correctly, then you can begin adding additional page views to your project.

The term "page view" is akin to an individual web "page" on your site. Your Angular project will actually only consist of a single landing page (`/public_html/index.php` - built by Webpack), Angular will dynamically inject content for each "page" of your app here. The template that you create for "page" is referred to as an Angular "view" or "page view".      

The Getting Started demo provided you with only one "page view" - the Home page. The instructions below will guide you step-by-step on how to create additional page views. Repeat the process for each page view you need to create for your app.

### Before You Begin

You do not need to have your UI built out prior to this process - use placeholder content and update the UI and views later if you like! What is important is that your Angular Routes, Components, Templates and routerLink links are in place and working correctly.

#### Links for Testing
It helps to create a set of simple links for testing purposes before you begin building your page views. These links will point to each page view you plan to build and allow us to test our routes. In this example we used the default Bootstrap navbar. 

You'll want to insert your navbar HTML into your **Angular Base Template** located in `public_html/templates`. This file should have been named `YOUR_APP_NAME-app.php` per the setup instructions in ng-demo. This is also the file where you would want to insert your footer as well.

2. Your links need to be updated with the **angular friendly** `routerLink`. This will replace `href` in your `<a>` tags. This is specific to AngularJS only. See examples below:
```
<li><a routerLink="">Home</a></li>
<li><a routerLink="/about">About</a></li>
<li><a routerLink="/contact">Contact</a></li>
``` 
Name your paths thoughtfully, and take note. The paths inside each `routerLink` needs to correspond to the **Angular Route** you will set up for each page later on. The path for the Home view is simply an empty string because it corresponds to the default Home Page view we set up in ng-demo.

### Images
All images should be added to a directory named `/img`, inside your `/app` directory. **Paths to these images in your `app.css` file will need to be relative to the `app.css` file**. **Images inside an &lt;img&gt; tag will need to be relative to `public_html/index.php`**.

### Instructions
Each new Page View needs the following:
1. A Component
2. An updated Route in `app.routes.ts`
3. A template file

Remember that each time you make a change to a `.ts` file, add an image, or change `app.css`, you will need to re-run `npm run build`. You are free to make changes to any template file without having to re-run the build though!

