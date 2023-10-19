<h1 id="schoolroom">SchoolRoom</h1>
<div class="image-container">
  <img src="https://raw.githubusercontent.com/gemanepa/rn-schoolroom/dev/assets/readme/1.gif" alt="running app 1">
  <img src="https://raw.githubusercontent.com/gemanepa/rn-schoolroom/dev/assets/readme/2.gif" alt="running app 2">
</div>
<p>This is a MVP (Minimum Viable Product) in development phase for a school management software designed to help educational institutions manage their different classes and courses</p>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
<li><p>React Native + Expo</p></li>
<li><p>Typescript</p></li>
<li><p>Redux (Global State Handling)</p></li>
<li><p>React Native Paper (UI Components Library)</p></li>
<li><p>Tailwind (Styles Handling)</p></li>
<li><p>Jest (Unitary Tests)</p></li>
<li><p>ESlint (Code Guidelines)</p></li>
<li><p>Prettier (Code Formatting)</p></li>
<li><p>Github Actions Workflows</p></li>
</ul>

<h2 id="project-guide">Project Guide</h2>
<p>To run the "SchoolRoom" project, follow these steps:</p>
<ol>
<li>Ensure that you have Node.js and npm installed on your system.</li>
<li>Clone the repository to your local machine.</li>
<li>Navigate to the project directory.</li>
<li>Install project dependencies with <code>npm run install</code>.</li>
<li>Start the development server:</li>
</ol>
<ul>
<li>To run the project on Android, use: <code>npm run android</code>.</li>
<li>To run the project on iOS, use: <code>npm run ios</code>.</li>
<li>To run the project on the web, use: <code>npm run web</code>.</li>
</ul>
<ol start="6">
<li>You can also run tests using the command: <code>npm test</code>.</li>
<li>To check and format the code according to project guidelines, you can use the following commands:</li>
</ol>
<ul>
<li>Check code formatting: <code>npm run format:check</code>.</li>
<li>Automatically format the code: <code>npm run format</code>.</li>
</ul>
<ol start="8">
<li>For linting the code, you can use the following commands:</li>
</ol>
<ul>
<li>Check for linting issues: <code>npm run lint</code>.</li>
<li>Automatically fix some linting issues: <code>npm run lint:fix</code>.</li>
</ul>

<style>
  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .image-container img {
    max-width: 50%; /* You can adjust this value as needed */
    height: auto;
    margin: 0 10px; /* Adjust the margin for spacing between the images */
  }

  @media (max-width: 768px) {
    .image-container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

This code will display the images in a row on larger screens and in a column on smaller screens (such as mobile devices). The max-width property controls the size of the images, and you can adjust it as needed to make the images smaller or larger.
