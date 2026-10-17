/* ===================================================================
   data.js — All lesson content for LearnPath
   =================================================================== */

const TOPICS = [
  {
    id: 'payload-cms',
    name: 'Payload CMS',
    emoji: '📦',
    color: '#6c63ff',
    gradient: 'linear-gradient(135deg, #6c63ff, #8b5cf6)',
    description: 'Learn to build powerful content management systems',
    lessons: [
      {
        id: 'payload-1',
        title: 'What is a CMS?',
        xp: 10,
        checklist: ['Read the explanation', 'Understand the analogy', 'Complete the practice task'],
        content: `
          <div class="lesson-section">
            <h3>Let's Start at the Beginning 🌟</h3>
            <p>Before we dive into Payload CMS, we need to understand what a <strong>CMS</strong> even is. Don't worry — it's simpler than it sounds!</p>
            <p style="margin-top:10px;">CMS stands for <strong>Content Management System</strong>.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Real-world Analogy</div>
            <p>Think of a website like a <strong>newspaper</strong>. The newspaper has articles, photos, and headlines. Now, imagine two types of people:</p>
            <ul style="margin-top:8px; padding-left:20px;">
              <li>The <strong>editor</strong> — who writes and updates the articles</li>
              <li>The <strong>printer</strong> — who puts it all together and publishes it</li>
            </ul>
            <p style="margin-top:8px;">A CMS is like the editor's desk — it lets you <strong>create, edit, and manage content</strong> without needing to touch the code underneath.</p>
          </div>

          <div class="lesson-section">
            <h3>So What Exactly Does a CMS Do?</h3>
            <p>A CMS allows you to:</p>
            <ul>
              <li>✅ Write blog posts or articles</li>
              <li>✅ Upload images and videos</li>
              <li>✅ Manage users and roles</li>
              <li>✅ Publish and update content easily</li>
            </ul>
            <p style="margin-top:12px;">Without a CMS, every time you wanted to add a new blog post, you'd have to <strong>manually write HTML code</strong>. A CMS handles all that for you!</p>
          </div>

          <div class="info-box">
            <div class="info-icon">💡</div>
            <p><strong>Fun fact:</strong> WordPress is the most popular CMS in the world. It powers over 40% of all websites on the internet! But today we'll learn about something more modern and powerful — Payload CMS.</p>
          </div>

          <div class="lesson-section">
            <h3>Types of CMS Systems</h3>
            <p>There are two main kinds of CMS systems:</p>
            <ul>
              <li><strong>Traditional CMS:</strong> The content and the design are connected (like WordPress). What you see is what you get.</li>
              <li><strong>Headless CMS:</strong> The content is stored separately and delivered via an API. The design is built separately. This gives developers more freedom!</li>
            </ul>
            <p style="margin-top:10px;">Payload CMS is a <strong>headless CMS</strong> — which means it stores your content, and you decide how to display it!</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In your own words, explain what a CMS is. Pretend you're explaining it to a friend who has never heard of it before! Write 1-3 sentences below.</div>
            <textarea class="practice-input" id="practice-payload-1" placeholder="Type your answer here..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-1', 'cms')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-1"></div>
          </div>

          <div class="lesson-section" style="margin-top:24px;">
            <h3>🧪 Quick Quiz</h3>
          </div>
          <div id="quiz-payload-1"></div>
        `,
        quiz: {
          question: 'What does CMS stand for?',
          options: ['Code Management System', 'Content Management System', 'Computer Monitoring Software', 'Creative Media Suite'],
          correct: 1,
          explanation: 'CMS stands for <strong>Content Management System</strong>. It\'s a tool that helps you create, manage, and publish digital content without needing to code everything from scratch.'
        }
      },
      {
        id: 'payload-2',
        title: 'What is Payload CMS?',
        xp: 15,
        checklist: ['Understand what makes Payload unique', 'Learn key features', 'Complete the practice task'],
        content: `
          <div class="lesson-section">
            <h3>Meet Payload CMS 🚀</h3>
            <p>Now that you know what a CMS is, let's meet <strong>Payload CMS</strong>!</p>
            <p style="margin-top:10px;">Payload CMS is a <strong>modern, open-source, headless CMS</strong> built with JavaScript/TypeScript. It was created specifically for developers who want full control over their content and code.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Think of it this way</div>
            <p>If WordPress is like a <strong>pre-built house</strong> where you can change the furniture but not the walls — Payload CMS is like an <strong>empty lot with all the best building materials</strong>. You build exactly what you want, how you want it.</p>
          </div>

          <div class="lesson-section">
            <h3>Why is Payload Special?</h3>
            <p>Here's what makes Payload CMS stand out:</p>
            <ul>
              <li>🔧 <strong>Code-first:</strong> You define your content using code (TypeScript), giving you full control</li>
              <li>⚡ <strong>Fast & modern:</strong> Built on Node.js, Next.js, and MongoDB/PostgreSQL</li>
              <li>🔒 <strong>Built-in authentication:</strong> User logins, roles, and permissions are included</li>
              <li>📡 <strong>Auto-generated API:</strong> It automatically creates a REST and GraphQL API</li>
              <li>🎨 <strong>Custom Admin Panel:</strong> A beautiful dashboard where you manage your content</li>
              <li>💰 <strong>Free & open-source:</strong> No monthly fees!</li>
            </ul>
          </div>

          <div class="info-box">
            <div class="info-icon">🤔</div>
            <p>Don't worry if words like "TypeScript", "API", or "Node.js" are confusing right now! We'll learn about them in later topics. For now, just understand that Payload CMS is a very powerful tool built with modern technologies.</p>
          </div>

          <div class="lesson-section">
            <h3>What Can You Build with Payload?</h3>
            <ul>
              <li>📝 Blog websites</li>
              <li>🛍️ E-commerce stores</li>
              <li>📱 Mobile app backends</li>
              <li>🏢 Company websites</li>
              <li>📊 Data dashboards</li>
            </ul>
            <p style="margin-top:10px;">Essentially, <strong>anything that needs content managed by non-technical users</strong> while giving developers full control over the code!</p>
          </div>

          <div class="lesson-section">
            <h3>Payload vs. WordPress — A Quick Comparison</h3>
            <div style="overflow-x:auto;">
              <table style="width:100%; border-collapse:collapse; font-size:0.88rem; margin-top:10px;">
                <thead>
                  <tr style="background: linear-gradient(135deg, rgba(108,99,255,0.1), rgba(108,99,255,0.05));">
                    <th style="padding:10px 14px; text-align:left; border-bottom:2px solid var(--border);">Feature</th>
                    <th style="padding:10px 14px; text-align:left; border-bottom:2px solid var(--border);">WordPress</th>
                    <th style="padding:10px 14px; text-align:left; border-bottom:2px solid var(--border);">Payload CMS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid var(--border);">
                    <td style="padding:10px 14px;">Type</td>
                    <td style="padding:10px 14px;">Traditional CMS</td>
                    <td style="padding:10px 14px;">Headless CMS</td>
                  </tr>
                  <tr style="border-bottom:1px solid var(--border); background: rgba(108,99,255,0.02);">
                    <td style="padding:10px 14px;">Setup</td>
                    <td style="padding:10px 14px;">Easy (no coding)</td>
                    <td style="padding:10px 14px;">Requires coding knowledge</td>
                  </tr>
                  <tr style="border-bottom:1px solid var(--border);">
                    <td style="padding:10px 14px;">Flexibility</td>
                    <td style="padding:10px 14px;">Limited</td>
                    <td style="padding:10px 14px;">Very high</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 14px;">Cost</td>
                    <td style="padding:10px 14px;">Free (with paid plugins)</td>
                    <td style="padding:10px 14px;">Free & open-source</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Name <strong>two things</strong> that make Payload CMS different from a traditional CMS like WordPress. Try to use your own words!</div>
            <textarea class="practice-input" id="practice-payload-2" placeholder="Write two differences here..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-2', 'payload-features')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-2"></div>
          </div>

          <div id="quiz-payload-2"></div>
        `,
        quiz: {
          question: 'What type of CMS is Payload CMS?',
          options: ['Traditional CMS', 'Headless CMS', 'Visual CMS', 'Database CMS'],
          correct: 1,
          explanation: 'Payload CMS is a <strong>Headless CMS</strong>. This means it manages and stores your content separately, and you use an API to display it in your frontend (website or app).'
        }
      },
      {
        id: 'payload-3',
        title: 'Installing Payload CMS',
        xp: 20,
        checklist: ['Learn the requirements', 'Understand the install command', 'See the project structure'],
        content: `
          <div class="lesson-section">
            <h3>Getting Ready to Install ⚙️</h3>
            <p>Before we install Payload CMS, we need to make sure we have the right tools installed on our computer. Think of this like needing certain ingredients before baking a cake!</p>
          </div>

          <div class="info-box">
            <div class="info-icon">📋</div>
            <p><strong>Requirements:</strong> You need to have <strong>Node.js</strong> installed (version 18.20.2 or higher). Node.js is like the engine that runs JavaScript code outside of a browser. We'll cover VS Code (where you write code) in Topic 9!</p>
          </div>

          <div class="lesson-section">
            <h3>Step 1: Create a New Payload Project</h3>
            <p>Open your terminal (command line) and type this command. A terminal is like a text-based way to talk to your computer:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">Terminal / Command Line</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre>npx create-payload-app@latest</pre>
          </div>

          <div class="code-explanation">
            <h4>What does this command mean?</h4>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>npx</strong> — This runs a package from the internet without installing it permanently</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>create-payload-app</strong> — This is the official tool that creates a new Payload project for you</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>@latest</strong> — This means "use the newest version"</span>
            </div>
          </div>

          <div class="lesson-section">
            <h3>Step 2: Answer the Setup Questions</h3>
            <p>After running the command, it will ask you some questions. Here's what you'll see and what to answer:</p>
            <ul>
              <li>📝 <strong>Project name:</strong> Type any name (e.g., <span class="tag">my-first-cms</span>)</li>
              <li>🎨 <strong>Choose a template:</strong> Select "blank" for now</li>
              <li>🗄️ <strong>Choose a database:</strong> Select MongoDB or PostgreSQL</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>Step 3: Start the Development Server</h3>
            <p>After setup is complete, navigate into your project folder and start the server:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">Terminal</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="comment"># Go into your project folder</span>
cd my-first-cms

<span class="comment"># Start the development server</span>
npm run dev</pre>
          </div>

          <div class="code-explanation">
            <h4>Line-by-line explanation</h4>
            <div class="code-line-explain">
              <span class="line-num">1</span>
              <span class="line-desc"><strong>cd my-first-cms</strong> — "cd" means "change directory". This moves you into your project folder</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">2</span>
              <span class="line-desc"><strong>npm run dev</strong> — This starts your Payload CMS server in "development mode" (for testing/building)</span>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">✅</div>
            <p>Once the server starts, you can open your browser and go to <strong>http://localhost:3000</strong> to see your Payload CMS admin panel! <strong>localhost</strong> means "my own computer".</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Look at the install command: <code style="background:var(--bg); padding:2px 6px; border-radius:4px; font-family:monospace;">npx create-payload-app@latest</code><br/><br/>In your own words, what does <strong>npx</strong> do? (Hint: look at the explanation above!)</div>
            <textarea class="practice-input" id="practice-payload-3" placeholder="Type your answer here..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-3', 'npx')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-3"></div>
          </div>

          <div id="quiz-payload-3"></div>
        `,
        quiz: {
          question: 'What does "localhost:3000" mean when you open your browser?',
          options: ['A website on the internet', 'Your own computer running a local server', 'A Google server', 'The Payload CMS official website'],
          correct: 1,
          explanation: '"localhost" refers to <strong>your own computer</strong>. When you run a local server, it\'s accessible at localhost. The number 3000 is the "port" — like a door number on your computer that the server uses.'
        }
      },
      {
        id: 'payload-4',
        title: 'Understanding the Project Structure',
        xp: 20,
        checklist: ['Understand each folder\'s purpose', 'Know what payload.config.ts does', 'Complete the quiz'],
        content: `
          <div class="lesson-section">
            <h3>Your Project's File Structure 📁</h3>
            <p>When Payload CMS creates your project, it generates a bunch of folders and files. This might look overwhelming at first — but don't panic! Let's walk through it together.</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">Project Structure</span>
            </div>
            <pre>my-first-cms/
├── 📁 src/
│   ├── 📁 app/            <span class="comment">← Your Next.js app pages</span>
│   ├── 📁 collections/    <span class="comment">← Your content types</span>
│   └── payload.config.ts  <span class="comment">← Main Payload settings</span>
├── 📁 public/             <span class="comment">← Static files (images, etc.)</span>
├── package.json           <span class="comment">← Project info & dependencies</span>
├── tsconfig.json          <span class="comment">← TypeScript settings</span>
└── .env                   <span class="comment">← Secret settings (passwords, keys)</span></pre>
          </div>

          <div class="code-explanation">
            <h4>What each part does</h4>
            <div class="code-line-explain">
              <span class="line-num">📁</span>
              <span class="line-desc"><strong>src/</strong> — This is where all your source code lives. "src" is short for "source"</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">📁</span>
              <span class="line-desc"><strong>collections/</strong> — This is where you define your <em>content types</em> (like "Blog Posts", "Users", "Products"). We'll learn more about this in the next lesson!</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">⚙️</span>
              <span class="line-desc"><strong>payload.config.ts</strong> — The brain of your CMS. This file connects all your settings, collections, and plugins together</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">📦</span>
              <span class="line-desc"><strong>package.json</strong> — Lists all the packages (tools/libraries) your project needs. Like a shopping list!</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">🔒</span>
              <span class="line-desc"><strong>.env</strong> — Stores secret information like database passwords. This file should NEVER be shared publicly!</span>
            </div>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>Think of your project like a <strong>restaurant</strong>:</p>
            <ul style="margin-top:8px; padding-left:20px;">
              <li><strong>src/</strong> = The kitchen (where all the work happens)</li>
              <li><strong>collections/</strong> = The menu (what types of food/content you offer)</li>
              <li><strong>payload.config.ts</strong> = The restaurant manager (coordinates everything)</li>
              <li><strong>.env</strong> = The safe (where you keep passwords and receipts)</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>A Quick Look at payload.config.ts</h3>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">TypeScript — payload.config.ts</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="keyword">import</span> { buildConfig } <span class="keyword">from</span> <span class="string">'payload'</span>
<span class="keyword">import</span> { Posts } <span class="keyword">from</span> <span class="string">'./collections/Posts'</span>

<span class="keyword">export default</span> <span class="function">buildConfig</span>({
  collections: [Posts],  <span class="comment">// Add your collections here</span>
  secret: process.env.PAYLOAD_SECRET,  <span class="comment">// Secret key from .env</span>
  db: mongoDB({ url: process.env.DATABASE_URI })  <span class="comment">// Database connection</span>
})</pre>
          </div>

          <div class="code-explanation">
            <h4>Line-by-line breakdown</h4>
            <div class="code-line-explain">
              <span class="line-num">1</span>
              <span class="line-desc">Import the <strong>buildConfig</strong> function from Payload (like borrowing a tool)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">2</span>
              <span class="line-desc">Import our <strong>Posts</strong> collection (content type we define)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">4</span>
              <span class="line-desc"><strong>buildConfig()</strong> is the function that sets up your entire CMS</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">5</span>
              <span class="line-desc"><strong>collections</strong> — list of content types (we'll build these next!)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">6</span>
              <span class="line-desc"><strong>secret</strong> — a password used to encrypt data. We read it from <span class="tag">.env</span> for security</span>
            </div>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Which file would you edit to add a new collection (content type) to your Payload CMS project? And what folder would you put the collection file in?</div>
            <textarea class="practice-input" id="practice-payload-4" placeholder="Answer here..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-4', 'config-collections')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-4"></div>
          </div>

          <div id="quiz-payload-4"></div>
        `,
        quiz: {
          question: 'What is the purpose of the .env file in a Payload CMS project?',
          options: ['To store your HTML templates', 'To list all your blog posts', 'To store secret information like database passwords', 'To configure the admin panel colors'],
          correct: 2,
          explanation: 'The <strong>.env file</strong> stores secret configuration values like database passwords and API keys. These values are kept separate from your code so they can\'t accidentally be shared publicly. The "env" stands for "environment".'
        }
      },
      {
        id: 'payload-5',
        title: 'Collections & Fields',
        xp: 25,
        checklist: ['Understand what collections are', 'Learn about fields', 'Write your first collection'],
        content: `
          <div class="lesson-section">
            <h3>What are Collections? 📚</h3>
            <p>In Payload CMS, a <strong>Collection</strong> is a group of related content — like a database table. Every piece of content you create belongs to a collection.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Real-world Example</div>
            <p>Imagine you're running a blog. You might have these collections:</p>
            <ul style="margin-top:8px; padding-left:20px;">
              <li>📝 <strong>Posts</strong> — Each blog post is one "document" in the Posts collection</li>
              <li>👥 <strong>Users</strong> — Each person who can log in is a "document" in Users</li>
              <li>🗂️ <strong>Categories</strong> — Each category (Tech, Travel, Food) is a document</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>What are Fields?</h3>
            <p>A <strong>Field</strong> is a piece of data inside a collection document. Think of fields like columns in a spreadsheet.</p>
            <p style="margin-top:10px;">For example, a <strong>Post</strong> document might have these fields:</p>
            <ul>
              <li>📌 <strong>title</strong> (text) — "My First Blog Post"</li>
              <li>📝 <strong>content</strong> (rich text) — the body of the post</li>
              <li>📅 <strong>publishedDate</strong> (date) — when it was published</li>
              <li>✅ <strong>isPublished</strong> (true/false) — is it live or draft?</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>Writing Your First Collection</h3>
            <p>Let's create a <strong>Posts</strong> collection. Create a new file at <span class="tag">src/collections/Posts.ts</span>:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">TypeScript — src/collections/Posts.ts</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="keyword">import</span> { CollectionConfig } <span class="keyword">from</span> <span class="string">'payload'</span>

<span class="keyword">export const</span> Posts: CollectionConfig = {
  slug: <span class="string">'posts'</span>,       <span class="comment">// URL identifier: /api/posts</span>
  fields: [
    {
      name: <span class="string">'title'</span>,     <span class="comment">// Field name</span>
      type: <span class="string">'text'</span>,      <span class="comment">// Field type</span>
      required: <span class="keyword">true</span>,  <span class="comment">// This field cannot be empty</span>
    },
    {
      name: <span class="string">'content'</span>,
      type: <span class="string">'richText'</span>,  <span class="comment">// Rich text editor (like Word)</span>
    },
    {
      name: <span class="string">'publishedDate'</span>,
      type: <span class="string">'date'</span>,      <span class="comment">// Date picker field</span>
    },
  ],
}</pre>
          </div>

          <div class="code-explanation">
            <h4>Breaking it down</h4>
            <div class="code-line-explain">
              <span class="line-num">3</span>
              <span class="line-desc"><strong>export const Posts</strong> — Creates a collection and exports it so we can use it in payload.config.ts</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">4</span>
              <span class="line-desc"><strong>slug: 'posts'</strong> — This is the URL name. Your API will be at <code>/api/posts</code></span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">5</span>
              <span class="line-desc"><strong>fields: [...]</strong> — An array (list) of all the fields in this collection</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">7-9</span>
              <span class="line-desc"><strong>name, type, required</strong> — Each field has a name, a data type, and optional rules</span>
            </div>
          </div>

          <div class="lesson-section">
            <h3>Common Field Types</h3>
            <ul>
              <li><span class="tag">text</span> — Short text (titles, names)</li>
              <li><span class="tag">richText</span> — Long text with formatting (like a blog post body)</li>
              <li><span class="tag">number</span> — Numbers (price, age, quantity)</li>
              <li><span class="tag">date</span> — Date & time</li>
              <li><span class="tag">checkbox</span> — True or false</li>
              <li><span class="tag">select</span> — Dropdown options</li>
              <li><span class="tag">upload</span> — File/image upload</li>
              <li><span class="tag">relationship</span> — Link to another collection</li>
            </ul>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">You want to create a <strong>Products</strong> collection for an online store. List <strong>4 fields</strong> that a product would need, and the <strong>type</strong> for each field. (Example: name — text)</div>
            <textarea class="practice-input" id="practice-payload-5" placeholder="1. name — text&#10;2. ...&#10;3. ...&#10;4. ..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-5', 'products')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-5"></div>
          </div>

          <div id="quiz-payload-5"></div>
        `,
        quiz: {
          question: 'In Payload CMS, what does the "slug" property on a collection do?',
          options: ['It sets the background color of the admin panel', 'It defines the URL path for the API endpoint', 'It sets how many documents can be created', 'It is the name shown in the sidebar'],
          correct: 1,
          explanation: 'The <strong>slug</strong> defines the URL/API endpoint for the collection. For example, a slug of "posts" means your API will be accessible at <code>/api/posts</code>. It\'s like the "web address" for that collection\'s data.'
        }
      },
      {
        id: 'payload-6',
        title: 'The Admin Panel',
        xp: 20,
        checklist: ['Navigate the admin panel', 'Create and edit content', 'Understand the UI'],
        content: `
          <div class="lesson-section">
            <h3>Your Control Center 🎛️</h3>
            <p>The <strong>Admin Panel</strong> is the graphical interface where you (and your clients/editors) manage all the content. You don't need to write code to create blog posts, upload images, or manage users — you do it all from this dashboard!</p>
          </div>

          <div class="lesson-section">
            <h3>How to Access It</h3>
            <p>When your Payload server is running, open your browser and go to:</p>
            <div class="code-block" style="margin:12px 0;">
              <pre style="padding:12px 20px;">http://localhost:3000/admin</pre>
            </div>
            <p>You'll see a login screen. Enter the admin email and password you created during setup.</p>
          </div>

          <div class="lesson-section">
            <h3>What's Inside the Admin Panel?</h3>
            <ul>
              <li>📋 <strong>Dashboard</strong> — Overview of your content</li>
              <li>📁 <strong>Collections list</strong> — All your content types in the sidebar</li>
              <li>📝 <strong>Document editor</strong> — Create/edit individual content items</li>
              <li>👥 <strong>Users section</strong> — Manage who has access</li>
              <li>📂 <strong>Media library</strong> — All uploaded files and images</li>
            </ul>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>The Admin Panel is like the <strong>backstage of a theater</strong>. The audience (your website visitors) only see the stage (the frontend). But backstage, actors, directors, and crew (you and your team) manage everything that appears on stage — costumes, props, scripts — all through the admin panel!</p>
          </div>

          <div class="lesson-section">
            <h3>Customizing the Admin Panel</h3>
            <p>You can customize what the admin panel looks like and what it shows. For example:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">TypeScript — payload.config.ts</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="keyword">export default</span> <span class="function">buildConfig</span>({
  admin: {
    meta: {
      titleSuffix: <span class="string">'— My Blog Admin'</span>,  <span class="comment">// Browser tab title</span>
    },
    livePreview: {
      url: <span class="string">'http://localhost:3001'</span>,  <span class="comment">// Preview your site</span>
    },
  },
  collections: [Posts, Users],
})</pre>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In your own words, describe <strong>who would use</strong> the Admin Panel and <strong>why</strong> it's useful. Think about a real scenario — for example, a blogger, a business owner, or a teacher.</div>
            <textarea class="practice-input" id="practice-payload-6" placeholder="Describe who uses the admin panel and why it's useful..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-6', 'admin-panel')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-6"></div>
          </div>

          <div id="quiz-payload-6"></div>
        `,
        quiz: {
          question: 'What URL do you visit to access the Payload CMS admin panel when running locally?',
          options: ['http://localhost:3000/dashboard', 'http://localhost:3000/admin', 'http://admin.payloadcms.com', 'http://localhost:8080'],
          correct: 1,
          explanation: 'By default, the Payload CMS admin panel is accessed at <strong>http://localhost:3000/admin</strong>. The "/admin" path is the admin route. You can customize this path in your payload.config.ts if needed.'
        }
      },
      {
        id: 'payload-7',
        title: 'Users & Authentication',
        xp: 25,
        checklist: ['Understand Payload authentication', 'Learn user roles', 'See access control'],
        content: `
          <div class="lesson-section">
            <h3>Who Can Access What? 🔐</h3>
            <p><strong>Authentication</strong> is the process of verifying who a user is (like checking their ID). <strong>Authorization</strong> is controlling what they're allowed to do after they're verified.</p>
            <p style="margin-top:10px;">Payload CMS has <strong>built-in authentication</strong> — which means you don't have to build your own login system! It's already done for you.</p>
          </div>

          <div class="lesson-section">
            <h3>The Users Collection</h3>
            <p>Payload automatically creates a <strong>Users</strong> collection. Each user document includes:</p>
            <ul>
              <li>📧 <strong>email</strong> — User's email address</li>
              <li>🔑 <strong>password</strong> — Stored securely (encrypted)</li>
              <li>🏷️ <strong>role</strong> — Their permission level (admin, editor, viewer)</li>
            </ul>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">TypeScript — Users Collection with Auth</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="keyword">import</span> { CollectionConfig } <span class="keyword">from</span> <span class="string">'payload'</span>

<span class="keyword">export const</span> Users: CollectionConfig = {
  slug: <span class="string">'users'</span>,
  auth: <span class="keyword">true</span>,    <span class="comment">// ← This enables authentication!</span>
  fields: [
    {
      name: <span class="string">'name'</span>,
      type: <span class="string">'text'</span>,
      required: <span class="keyword">true</span>,
    },
    {
      name: <span class="string">'role'</span>,
      type: <span class="string">'select'</span>,
      options: [
        { label: <span class="string">'Admin'</span>, value: <span class="string">'admin'</span> },
        { label: <span class="string">'Editor'</span>, value: <span class="string">'editor'</span> },
        { label: <span class="string">'Viewer'</span>, value: <span class="string">'viewer'</span> },
      ],
      defaultValue: <span class="string">'viewer'</span>,
    },
  ],
}</pre>
          </div>

          <div class="code-explanation">
            <h4>Key lines explained</h4>
            <div class="code-line-explain">
              <span class="line-num">5</span>
              <span class="line-desc"><strong>auth: true</strong> — This magical line tells Payload "this collection handles logins". It automatically adds password hashing, JWT tokens, and login/logout endpoints!</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">13</span>
              <span class="line-desc"><strong>type: 'select'</strong> — Creates a dropdown menu with options</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">14-18</span>
              <span class="line-desc"><strong>options</strong> — The choices available in the dropdown. Label is what users see, value is what's stored</span>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">🔒</div>
            <p><strong>Access Control</strong> lets you restrict who can see or modify content. For example: only admins can delete posts, but editors can create them. We add this using <strong>access</strong> functions in each collection.</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Imagine you're building a CMS for a school. What <strong>three roles</strong> would you create for users, and what should each role be able to do?</div>
            <textarea class="practice-input" id="practice-payload-7" placeholder="Role 1: Teacher — can create lessons&#10;Role 2: ...&#10;Role 3: ..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-7', 'roles')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-7"></div>
          </div>

          <div id="quiz-payload-7"></div>
        `,
        quiz: {
          question: 'What does adding "auth: true" to a Payload collection do?',
          options: ['It makes the collection public to everyone', 'It enables authentication features like login, password hashing, and JWT tokens', 'It hides the collection from the admin panel', 'It connects the collection to a Google account'],
          correct: 1,
          explanation: 'Setting <strong>auth: true</strong> on a collection tells Payload that this is an authentication collection. It automatically adds login/logout API endpoints, secure password hashing, and JWT (JSON Web Token) session management — all without you having to write that code yourself!'
        }
      },
      {
        id: 'payload-8',
        title: 'The Payload API',
        xp: 30,
        checklist: ['Understand REST API basics', 'Learn Payload API endpoints', 'Make a test API request'],
        content: `
          <div class="lesson-section">
            <h3>What is an API? 📡</h3>
            <p>An <strong>API</strong> (Application Programming Interface) is a way for two applications to talk to each other. It's like a waiter in a restaurant — you tell the waiter what you want, the waiter goes to the kitchen, and brings back your food.</p>
            <p style="margin-top:10px;">In web development, you make <strong>requests</strong> to an API, and it sends back <strong>data</strong> (usually as JSON).</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Real-world Analogy</div>
            <p>Your <strong>frontend website</strong> (what users see) needs to get blog posts from your <strong>Payload CMS backend</strong>. The website sends a request to the API: "Give me all posts!" The API responds with a list of posts in JSON format.</p>
          </div>

          <div class="lesson-section">
            <h3>Payload's Auto-Generated API</h3>
            <p>One of the best things about Payload CMS — it <strong>automatically creates API endpoints</strong> for every collection you define! You don't write the API yourself.</p>
            <p style="margin-top:10px;">For example, if you have a <strong>Posts</strong> collection with slug "posts", Payload creates:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">REST API Endpoints (auto-generated)</span>
            </div>
            <pre><span class="comment"># Get ALL posts</span>
GET  http://localhost:3000/api/posts

<span class="comment"># Get ONE post by its ID</span>
GET  http://localhost:3000/api/posts/[id]

<span class="comment"># Create a new post</span>
POST  http://localhost:3000/api/posts

<span class="comment"># Update a post</span>
PATCH  http://localhost:3000/api/posts/[id]

<span class="comment"># Delete a post</span>
DELETE  http://localhost:3000/api/posts/[id]</pre>
          </div>

          <div class="lesson-section">
            <h3>What is JSON?</h3>
            <p><strong>JSON</strong> (JavaScript Object Notation) is the format APIs use to send data. It looks like this:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">JSON — Example API Response</span>
            </div>
            <pre>{
  <span class="string">"docs"</span>: [
    {
      <span class="string">"id"</span>: <span class="string">"abc123"</span>,
      <span class="string">"title"</span>: <span class="string">"My First Post"</span>,
      <span class="string">"publishedDate"</span>: <span class="string">"2024-01-15"</span>
    },
    {
      <span class="string">"id"</span>: <span class="string">"def456"</span>,
      <span class="string">"title"</span>: <span class="string">"Learning Payload CMS"</span>,
      <span class="string">"publishedDate"</span>: <span class="string">"2024-01-20"</span>
    }
  ],
  <span class="string">"totalDocs"</span>: <span class="number">2</span>
}</pre>
          </div>

          <div class="code-explanation">
            <h4>Reading JSON</h4>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>{ }</strong> — Curly braces contain an object (a collection of key-value pairs)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>[ ]</strong> — Square brackets contain an array (a list of items)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>"key": "value"</strong> — Each piece of data has a name (key) and a value</span>
            </div>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Look at this API endpoint: <code style="font-family:monospace; background:var(--bg); padding:2px 6px; border-radius:4px;">GET /api/posts/abc123</code><br/><br/>What do you think this request does? And what does the <strong>abc123</strong> part represent?</div>
            <textarea class="practice-input" id="practice-payload-8" placeholder="This request..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-8', 'api')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-payload-8"></div>
          </div>

          <div id="quiz-payload-8"></div>
        `,
        quiz: {
          question: 'What does a GET request to "/api/posts" do in Payload CMS?',
          options: ['Creates a new post', 'Deletes all posts', 'Retrieves/fetches all posts from the database', 'Updates all posts'],
          correct: 2,
          explanation: 'A <strong>GET request</strong> is used to <strong>retrieve (fetch) data</strong>. Sending GET to "/api/posts" asks the server to return all documents in the Posts collection. GET is "read-only" — it never changes data.'
        }
      }
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    emoji: '🐙',
    color: '#333333',
    gradient: 'linear-gradient(135deg, #24292e, #586069)',
    description: 'Master version control and collaboration',
    lessons: [
      {
        id: 'github-1',
        title: 'What is Git & GitHub?',
        xp: 10,
        checklist: ['Understand Git vs GitHub', 'Learn why version control matters', 'Complete the practice task'],
        content: `
          <div class="lesson-section">
            <h3>Version Control — Why Does It Matter? 🕐</h3>
            <p>Imagine you're writing an essay. You save it as "essay.docx". Then you make changes and save again. But what if the new version is terrible and you want to go back? That's where <strong>version control</strong> comes in!</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Save Game System</div>
            <p>Think of Git like a <strong>video game save system</strong>. Every time you reach a checkpoint, you save. If you die (make a mistake), you can reload from your last save. Git does this for your <strong>code</strong>!</p>
          </div>

          <div class="lesson-section">
            <h3>Git vs GitHub — What's the Difference?</h3>
            <ul>
              <li>🔧 <strong>Git</strong> — A tool installed on your computer that tracks changes in your files (version control)</li>
              <li>☁️ <strong>GitHub</strong> — A website that stores your Git projects online, so you can access them anywhere and share with others</li>
            </ul>
            <p style="margin-top:12px;"><strong>Git</strong> is the tool. <strong>GitHub</strong> is the cloud storage for your Git projects.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Another Analogy</div>
            <p>Git is like <strong>Microsoft Word's Track Changes</strong> feature — it records every edit. GitHub is like <strong>Google Drive</strong> — it stores your Word documents online so you can share them.</p>
          </div>

          <div class="lesson-section">
            <h3>Why Do Developers Use Git & GitHub?</h3>
            <ul>
              <li>⏪ <strong>Undo mistakes</strong> — Roll back to any previous version</li>
              <li>👥 <strong>Collaborate</strong> — Multiple people can work on the same project</li>
              <li>🌿 <strong>Branches</strong> — Work on new features without breaking the main code</li>
              <li>💾 <strong>Backup</strong> — Your code is safely stored in the cloud</li>
              <li>📋 <strong>History</strong> — See exactly who changed what and when</li>
            </ul>
          </div>

          <div class="info-box">
            <div class="info-icon">🌍</div>
            <p>GitHub is used by <strong>over 100 million developers</strong> worldwide. Almost every professional software project uses Git and GitHub. Learning it will make you a better developer!</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Explain the difference between <strong>Git</strong> and <strong>GitHub</strong> in your own words. Use the analogy or your own example!</div>
            <textarea class="practice-input" id="practice-github-1" placeholder="Git is... GitHub is..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('github-1', 'git-github')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-github-1"></div>
          </div>

          <div id="quiz-github-1"></div>
        `,
        quiz: {
          question: 'Which of the following best describes GitHub?',
          options: ['A text editor for writing code', 'A website that hosts Git repositories online', 'A programming language', 'A type of database'],
          correct: 1,
          explanation: '<strong>GitHub</strong> is a cloud-based platform that hosts <strong>Git repositories</strong>. It lets you store your code online, collaborate with others, and access your projects from anywhere. Git is the tool, GitHub is the hosting platform.'
        }
      },
      {
        id: 'github-2',
        title: 'Repositories & Creating Your First Repo',
        xp: 15,
        checklist: ['Understand what a repository is', 'Create a GitHub account', 'Create your first repository'],
        content: `
          <div class="lesson-section">
            <h3>What is a Repository? 📁</h3>
            <p>A <strong>repository</strong> (or "repo") is like a <strong>project folder</strong> that Git tracks. Every file, every change, every version of your project is stored in the repository.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>A repository is like a <strong>library book's complete edition history</strong> — not just the final book, but every draft, every edit, every chapter that was added or removed, going all the way back to the first word ever written.</p>
          </div>

          <div class="lesson-section">
            <h3>Creating Your First Repository on GitHub</h3>
            <p>Follow these steps:</p>
            <ol>
              <li>Go to <strong>github.com</strong> and create a free account (if you haven't)</li>
              <li>Click the <strong>green "New" button</strong> in the top left</li>
              <li>Give your repo a name (e.g., <span class="tag">my-first-repo</span>)</li>
              <li>Choose <strong>Public</strong> (anyone can see) or <strong>Private</strong> (only you)</li>
              <li>Check ✅ <strong>"Add a README file"</strong></li>
              <li>Click <strong>"Create repository"</strong></li>
            </ol>
          </div>

          <div class="info-box">
            <div class="info-icon">📄</div>
            <p>A <strong>README.md</strong> file is like the front page of your project. It describes what the project is, how to install it, and how to use it. The ".md" means it's a Markdown file — a simple formatting language we'll talk about later!</p>
          </div>

          <div class="lesson-section">
            <h3>Repository Settings to Know</h3>
            <ul>
              <li>📛 <strong>Repository name</strong> — Keep it short and descriptive (use hyphens, not spaces)</li>
              <li>👁️ <strong>Public/Private</strong> — Public repos are visible to everyone; private repos are only for you and people you invite</li>
              <li>📄 <strong>README</strong> — Always add one! It's professional and helpful</li>
              <li>🚫 <strong>.gitignore</strong> — A file that tells Git which files to ignore (like password files or large downloads)</li>
              <li>📜 <strong>License</strong> — Tells others what they're allowed to do with your code</li>
            </ul>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">You're creating a repository for a recipe website. What would you name the repository, and would you make it public or private? Explain your choices!</div>
            <textarea class="practice-input" id="practice-github-2" placeholder="I would name it... and make it... because..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('github-2', 'repo')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-github-2"></div>
          </div>

          <div id="quiz-github-2"></div>
        `,
        quiz: {
          question: 'What is a GitHub repository?',
          options: ['A type of programming language', 'A project folder that stores all your code, files, and version history', 'A chat application for developers', 'A code editor'],
          correct: 1,
          explanation: 'A <strong>repository (repo)</strong> is like a special project folder that stores all your files AND their complete history of changes. It\'s the core concept of Git and GitHub — everything lives in a repository.'
        }
      }
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    emoji: '🌐',
    color: '#e34c26',
    gradient: 'linear-gradient(135deg, #e34c26, #f06529)',
    description: 'Build the structure of web pages',
    lessons: [
      {
        id: 'html-1',
        title: 'What is HTML?',
        xp: 10,
        checklist: ['Understand what HTML is', 'Learn about tags and elements', 'Write your first HTML'],
        content: `
          <div class="lesson-section">
            <h3>The Language of the Web 🌐</h3>
            <p><strong>HTML</strong> stands for <strong>HyperText Markup Language</strong>. It is the standard language used to create web pages. Every website you've ever visited was built with HTML!</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>Think of a house: <strong>HTML</strong> is the <em>skeleton and walls</em> — the structure. <strong>CSS</strong> (which you'll learn later) is the <em>paint, wallpaper, and furniture</em> — the design. <strong>JavaScript</strong> is the <em>electricity and plumbing</em> — the functionality.</p>
          </div>

          <div class="lesson-section">
            <h3>HTML Tags — The Building Blocks</h3>
            <p>HTML uses <strong>tags</strong> to mark up content. A tag tells the browser "this is a heading", "this is a paragraph", "this is a link", etc.</p>
            <p style="margin-top:10px;">Most tags come in pairs — an <strong>opening tag</strong> and a <strong>closing tag</strong>:</p>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">HTML</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="comment">&lt;!-- This is an opening and closing tag pair --&gt;</span>
&lt;<span class="keyword">p</span>&gt;Hello, World!&lt;/<span class="keyword">p</span>&gt;

<span class="comment">&lt;!-- This is a self-closing tag (no content inside) --&gt;</span>
&lt;<span class="keyword">br</span> /&gt;</pre>
          </div>

          <div class="code-explanation">
            <h4>Understanding tags</h4>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>&lt;p&gt;</strong> — Opening tag (starts the paragraph)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>Hello, World!</strong> — The content inside the tag</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">•</span>
              <span class="line-desc"><strong>&lt;/p&gt;</strong> — Closing tag (the "/" means "closing")</span>
            </div>
          </div>

          <div class="lesson-section">
            <h3>Your First HTML Document</h3>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">HTML</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre>&lt;!DOCTYPE html&gt;
&lt;<span class="keyword">html</span> lang=<span class="string">"en"</span>&gt;
  &lt;<span class="keyword">head</span>&gt;
    &lt;<span class="keyword">title</span>&gt;My First Page&lt;/<span class="keyword">title</span>&gt;
  &lt;/<span class="keyword">head</span>&gt;
  &lt;<span class="keyword">body</span>&gt;
    &lt;<span class="keyword">h1</span>&gt;Hello, World!&lt;/<span class="keyword">h1</span>&gt;
    &lt;<span class="keyword">p</span>&gt;This is my first webpage!&lt;/<span class="keyword">p</span>&gt;
  &lt;/<span class="keyword">body</span>&gt;
&lt;/<span class="keyword">html</span>&gt;</pre>
          </div>

          <div class="code-explanation">
            <h4>Every line explained</h4>
            <div class="code-line-explain">
              <span class="line-num">1</span>
              <span class="line-desc"><strong>&lt;!DOCTYPE html&gt;</strong> — Tells the browser "this is an HTML5 document"</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">2</span>
              <span class="line-desc"><strong>&lt;html&gt;</strong> — The root (starting point) of every HTML page</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">3-5</span>
              <span class="line-desc"><strong>&lt;head&gt;</strong> — Contains invisible settings (title, links to CSS, etc.). NOT shown on the page</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">4</span>
              <span class="line-desc"><strong>&lt;title&gt;</strong> — The text that appears on the browser tab</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">6-9</span>
              <span class="line-desc"><strong>&lt;body&gt;</strong> — Everything inside here is VISIBLE on the webpage</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">7</span>
              <span class="line-desc"><strong>&lt;h1&gt;</strong> — The largest heading (like a chapter title)</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">8</span>
              <span class="line-desc"><strong>&lt;p&gt;</strong> — A paragraph of text</span>
            </div>
          </div>

          <div class="lesson-section">
            <h3>✏️ Try It Yourself!</h3>
            <p>Use the code editor below to edit the HTML and see a live preview:</p>
          </div>

          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left">
                <div class="editor-dot red"></div>
                <div class="editor-dot yellow"></div>
                <div class="editor-dot green"></div>
              </div>
              <div class="editor-toolbar-right">
                <button class="editor-btn run-btn" onclick="runEditorCode('editor-html-1', 'preview-html-1')">▶ Run</button>
              </div>
            </div>
            <textarea class="code-textarea" id="editor-html-1" rows="10">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;Change this text to your name!&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</textarea>
            <div class="output-label" style="padding:8px 16px; font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--accent); border-top:1px solid var(--border);">Preview</div>
            <iframe class="preview-iframe" id="preview-html-1"></iframe>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In the editor above, change the heading to say <strong>"Welcome to My Website"</strong> and the paragraph to say <strong>"My name is [your name]."</strong> Then click Run to see the preview!</div>
          </div>

          <div id="quiz-html-1"></div>
        `,
        quiz: {
          question: 'What does HTML stand for?',
          options: ['High Text Markup Language', 'HyperText Markup Language', 'Hyperlink and Text Mechanism Language', 'Home Tool Markup Language'],
          correct: 1,
          explanation: 'HTML stands for <strong>HyperText Markup Language</strong>. "HyperText" refers to links between pages, and "Markup Language" means it uses tags to mark up (label) the content so browsers know how to display it.'
        }
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    emoji: '🎨',
    color: '#264de4',
    gradient: 'linear-gradient(135deg, #264de4, #2965f1)',
    description: 'Style and design beautiful web pages',
    lessons: [
      {
        id: 'css-1',
        title: 'What is CSS?',
        xp: 10,
        checklist: ['Understand what CSS does', 'Learn CSS syntax', 'Write your first CSS'],
        content: `
          <div class="lesson-section">
            <h3>Adding Style to Your Webpages 🎨</h3>
            <p><strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>. If HTML is the skeleton of a webpage, CSS is the <em>skin, clothes, and makeup</em> — it controls how everything looks!</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>HTML gives you a plain, black-and-white outline drawing. CSS is like a set of colored markers and stickers that make it look amazing!</p>
          </div>

          <div class="lesson-section">
            <h3>How CSS Works</h3>
            <p>CSS uses <strong>rules</strong> to style HTML elements. Each rule has two parts:</p>
            <ul>
              <li><strong>Selector</strong> — Which HTML element to style</li>
              <li><strong>Declaration Block</strong> — What styles to apply</li>
            </ul>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">CSS</span>
              <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre><span class="comment">/* This is a CSS rule */</span>
<span class="keyword">h1</span> {
  <span class="function">color</span>: <span class="string">blue</span>;
  <span class="function">font-size</span>: <span class="number">32px</span>;
  <span class="function">text-align</span>: <span class="string">center</span>;
}</pre>
          </div>

          <div class="code-explanation">
            <h4>Breaking down the CSS rule</h4>
            <div class="code-line-explain">
              <span class="line-num">2</span>
              <span class="line-desc"><strong>h1</strong> — The selector. This targets ALL &lt;h1&gt; elements on the page</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">3</span>
              <span class="line-desc"><strong>color: blue;</strong> — Sets the text color to blue. The property is "color", the value is "blue"</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">4</span>
              <span class="line-desc"><strong>font-size: 32px;</strong> — Makes the text 32 pixels tall. "px" means pixels</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">5</span>
              <span class="line-desc"><strong>text-align: center;</strong> — Centers the text horizontally</span>
            </div>
          </div>

          <div class="lesson-section">
            <h3>Try It!</h3>
          </div>

          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left">
                <div class="editor-dot red"></div>
                <div class="editor-dot yellow"></div>
                <div class="editor-dot green"></div>
              </div>
              <div class="editor-toolbar-right">
                <button class="editor-btn run-btn" onclick="runEditorCode('editor-css-1', 'preview-css-1')">▶ Run</button>
              </div>
            </div>
            <textarea class="code-textarea" id="editor-css-1" rows="14">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
  h1 {
    color: purple;
    font-size: 36px;
    text-align: center;
  }
  p {
    color: gray;
    font-size: 18px;
  }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Styled Heading!&lt;/h1&gt;
  &lt;p&gt;This paragraph has a gray color.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
            <div class="output-label" style="padding:8px 16px; font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--accent); border-top:1px solid var(--border);">Preview</div>
            <iframe class="preview-iframe" id="preview-css-1"></iframe>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In the editor above, change the heading color to <strong>red</strong> and the paragraph color to <strong>darkblue</strong>. Then click Run!</div>
          </div>

          <div id="quiz-css-1"></div>
        `,
        quiz: {
          question: 'In CSS, what is a "selector"?',
          options: ['A type of HTML tag', 'The part that specifies which HTML element to style', 'A color value', 'A programming language'],
          correct: 1,
          explanation: 'A <strong>CSS selector</strong> specifies which HTML element(s) to apply the styles to. For example, "h1" selects all &lt;h1&gt; elements, ".myClass" selects elements with that class name, and "#myId" selects an element with that ID.'
        }
      }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    emoji: '⚡',
    color: '#f7df1e',
    gradient: 'linear-gradient(135deg, #f7df1e, #f8a900)',
    description: 'Add interactivity and logic to websites',
    lessons: [
      {
        id: 'js-1',
        title: 'What is JavaScript?',
        xp: 10,
        checklist: ['Understand what JavaScript does', 'See JavaScript in action', 'Write your first JavaScript'],
        content: `
          <div class="lesson-section">
            <h3>Making Websites Come Alive ⚡</h3>
            <p><strong>JavaScript</strong> is a programming language that runs in the browser. While HTML creates the structure and CSS makes it look good, <strong>JavaScript makes things happen!</strong></p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>If a website is a human body: HTML = bones, CSS = skin and clothes, JavaScript = muscles and brain. JavaScript makes things <em>move, respond, and think</em>!</p>
          </div>

          <div class="lesson-section">
            <h3>What Can JavaScript Do?</h3>
            <ul>
              <li>🖱️ Respond to button clicks and other user actions</li>
              <li>🔄 Update content on the page without reloading</li>
              <li>✅ Validate forms before submitting</li>
              <li>⏰ Create timers and animations</li>
              <li>📡 Fetch data from APIs (like news or weather)</li>
              <li>🎮 Build games!</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>Your First JavaScript Code</h3>
          </div>

          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left">
                <div class="editor-dot red"></div>
                <div class="editor-dot yellow"></div>
                <div class="editor-dot green"></div>
              </div>
              <div class="editor-toolbar-right">
                <button class="editor-btn run-btn" onclick="runEditorCode('editor-js-1', 'preview-js-1')">▶ Run</button>
              </div>
            </div>
            <textarea class="code-textarea" id="editor-js-1" rows="14">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1 id="greeting"&gt;Hello!&lt;/h1&gt;
  &lt;button onclick="changeGreeting()"&gt;Click Me!&lt;/button&gt;

  &lt;script&gt;
    function changeGreeting() {
      document.getElementById('greeting').innerText = 'JavaScript is awesome! 🎉';
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</textarea>
            <div class="output-label" style="padding:8px 16px; font-size:0.72rem; font-weight:700; text-transform:uppercase; color:var(--accent); border-top:1px solid var(--border);">Preview</div>
            <iframe class="preview-iframe" id="preview-js-1"></iframe>
          </div>

          <div class="code-explanation">
            <h4>What's happening here?</h4>
            <div class="code-line-explain">
              <span class="line-num">4</span>
              <span class="line-desc"><strong>id="greeting"</strong> — Gives the h1 a unique name so JavaScript can find it</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">5</span>
              <span class="line-desc"><strong>onclick="changeGreeting()"</strong> — When the button is clicked, run the changeGreeting function</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">8</span>
              <span class="line-desc"><strong>function changeGreeting()</strong> — Defines a reusable block of code called "changeGreeting"</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">9</span>
              <span class="line-desc"><strong>document.getElementById('greeting')</strong> — Finds the element with id="greeting" on the page</span>
            </div>
            <div class="code-line-explain">
              <span class="line-num">9</span>
              <span class="line-desc"><strong>.innerText = '...'</strong> — Changes the text content of that element</span>
            </div>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In the editor above, change the button text to say <strong>"Say Hello!"</strong> and make it change the greeting to <strong>"Hello from JavaScript! 👋"</strong>. Click Run to test it!</div>
          </div>

          <div id="quiz-js-1"></div>
        `,
        quiz: {
          question: 'What is the primary purpose of JavaScript in web development?',
          options: ['To define the structure of a web page', 'To style and design the look of a web page', 'To add interactivity and dynamic behavior to web pages', 'To store data in a database'],
          correct: 2,
          explanation: '<strong>JavaScript</strong> adds interactivity and dynamic behavior to web pages. While HTML creates structure and CSS handles styling, JavaScript makes the page respond to user actions (clicks, typing), updates content dynamically, and communicates with servers.'
        }
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    emoji: '🔷',
    color: '#3178c6',
    gradient: 'linear-gradient(135deg, #3178c6, #235a9b)',
    description: 'Write safer, more reliable JavaScript',
    lessons: [
      {
        id: 'ts-1',
        title: 'What is TypeScript?',
        xp: 10,
        checklist: ['Understand TypeScript basics', 'See the difference from JavaScript', 'Understand why it exists'],
        content: `
          <div class="lesson-section">
            <h3>JavaScript With Superpowers 🔷</h3>
            <p><strong>TypeScript</strong> is like JavaScript but with one extra superpower — <strong>types</strong>! It's called a "typed" version of JavaScript.</p>
            <p style="margin-top:10px;">TypeScript was created by Microsoft to help developers catch errors <em>before</em> the code runs — while they're still writing it!</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>JavaScript is like a <strong>backpack with no labels</strong> — you can put anything in any pocket, but then you forget where things are. TypeScript is like a <strong>labeled backpack</strong> — each pocket says exactly what goes in it, so you always know where to find things!</p>
          </div>

          <div class="lesson-section">
            <h3>JavaScript vs TypeScript — Side by Side</h3>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">JavaScript (no types)</span>
            </div>
            <pre><span class="comment">// JavaScript — no types, risky!</span>
<span class="keyword">let</span> name = <span class="string">"Alice"</span>
<span class="keyword">let</span> age = <span class="number">25</span>

<span class="comment">// Oops! No error shown, but this is a bug</span>
age = <span class="string">"twenty-five"</span>  <span class="comment">// ← should be a number!</span></pre>
          </div>

          <div class="code-block">
            <div class="code-block-header">
              <span class="code-lang">TypeScript (with types)</span>
            </div>
            <pre><span class="comment">// TypeScript — types protect you!</span>
<span class="keyword">let</span> name: <span class="function">string</span> = <span class="string">"Alice"</span>
<span class="keyword">let</span> age: <span class="function">number</span> = <span class="number">25</span>

<span class="comment">// TypeScript catches this error immediately! 🛑</span>
age = <span class="string">"twenty-five"</span>
<span class="comment">// Error: Type 'string' is not assignable to type 'number'</span></pre>
          </div>

          <div class="lesson-section">
            <h3>Why Use TypeScript?</h3>
            <ul>
              <li>🛡️ <strong>Catches errors early</strong> — Before running the code, TypeScript shows you mistakes</li>
              <li>📖 <strong>Better documentation</strong> — Types explain what a function expects and returns</li>
              <li>🧠 <strong>Better code hints</strong> — Your code editor gives smarter suggestions</li>
              <li>🏗️ <strong>Great for large projects</strong> — Helps teams work together without breaking things</li>
              <li>🔄 <strong>Converts to JavaScript</strong> — Browsers can't run TypeScript directly, but it "compiles" into regular JavaScript</li>
            </ul>
          </div>

          <div class="info-box">
            <div class="info-icon">💡</div>
            <p>All the Payload CMS code you saw earlier was written in <strong>TypeScript</strong>! This is why TypeScript is so important to learn — it's used everywhere in modern web development.</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In your own words, explain <strong>one benefit</strong> of using TypeScript over regular JavaScript. Give an example of when that benefit would save you from a mistake!</div>
            <textarea class="practice-input" id="practice-ts-1" placeholder="One benefit is..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('ts-1', 'typescript')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-ts-1"></div>
          </div>

          <div id="quiz-ts-1"></div>
        `,
        quiz: {
          question: 'What is the main advantage TypeScript has over JavaScript?',
          options: ['TypeScript runs faster in the browser', 'TypeScript adds static types that catch errors before the code runs', 'TypeScript is easier to learn than JavaScript', 'TypeScript can only be used with React'],
          correct: 1,
          explanation: '<strong>TypeScript\'s main advantage</strong> is its type system. By adding types to your code, TypeScript can catch bugs and errors <em>while you\'re writing code</em>, before you even run it. This saves hours of debugging time!'
        }
      }
    ]
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    emoji: '📊',
    color: '#217346',
    gradient: 'linear-gradient(135deg, #217346, #1e6b3f)',
    description: 'Master spreadsheets and data analysis',
    lessons: [
      {
        id: 'excel-1',
        title: 'The Excel Interface',
        xp: 10,
        checklist: ['Identify Excel components', 'Understand cells, rows, columns', 'Navigate the interface'],
        content: `
          <div class="lesson-section">
            <h3>Welcome to Excel! 📊</h3>
            <p><strong>Microsoft Excel</strong> is a spreadsheet program used to organize, analyze, and present data. Think of it as a super-powered table that can do math for you!</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>Imagine a <strong>physical ledger book</strong> that an accountant uses to record numbers in rows and columns. Excel is the digital version — except it can automatically calculate totals, create charts, and sort data with one click!</p>
          </div>

          <div class="lesson-section">
            <h3>The Main Parts of Excel</h3>
            <ul>
              <li>📋 <strong>Workbook</strong> — The entire Excel file (like a notebook)</li>
              <li>📄 <strong>Worksheet (Sheet)</strong> — A single page/tab in the workbook</li>
              <li>⬛ <strong>Cell</strong> — A single box where you enter data</li>
              <li>↔️ <strong>Columns</strong> — Vertical sections labeled A, B, C, D...</li>
              <li>↕️ <strong>Rows</strong> — Horizontal sections labeled 1, 2, 3, 4...</li>
              <li>📍 <strong>Cell Reference</strong> — A cell's address: column + row (e.g., A1, B3, C10)</li>
            </ul>
          </div>

          <div class="info-box">
            <div class="info-icon">💡</div>
            <p>When you click on a cell like <strong>B3</strong>, you're selecting the cell in column B, row 3. The cell reference always shows column first, then row!</p>
          </div>

          <div class="lesson-section">
            <h3>Navigating Cells</h3>
            <ul>
              <li>⬆️⬇️⬅️➡️ <strong>Arrow keys</strong> — Move between cells</li>
              <li>⏎ <strong>Enter</strong> — Move down to the next cell</li>
              <li>⇥ <strong>Tab</strong> — Move right to the next cell</li>
              <li>📦 <strong>Ctrl+Home</strong> — Jump to cell A1</li>
              <li>🔍 <strong>Ctrl+End</strong> — Jump to the last used cell</li>
            </ul>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Open Microsoft Excel (or Google Sheets). In cell <strong>A1</strong>, type your name. In cell <strong>B1</strong>, type today's date. In cell <strong>C1</strong>, type "My First Spreadsheet". What do you notice about how Excel displays what you typed?</div>
            <textarea class="practice-input" id="practice-excel-1" placeholder="I noticed that..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('excel-1', 'excel')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-excel-1"></div>
          </div>

          <div id="quiz-excel-1"></div>
        `,
        quiz: {
          question: 'What is the "cell reference" for the cell in column C, row 5?',
          options: ['5C', 'C-5', 'C5', 'Row5-ColC'],
          correct: 2,
          explanation: 'Cell references are written as <strong>column letter + row number</strong>. So column C, row 5 is <strong>C5</strong>. This is always column first, then row. Examples: A1 (column A, row 1), B3 (column B, row 3).'
        }
      }
    ]
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    emoji: '📈',
    color: '#0f9d58',
    gradient: 'linear-gradient(135deg, #0f9d58, #0b8043)',
    description: 'Collaborate on spreadsheets in the cloud',
    lessons: [
      {
        id: 'sheets-1',
        title: 'Introduction to Google Sheets',
        xp: 10,
        checklist: ['Access Google Sheets', 'Understand the interface', 'Compare with Excel'],
        content: `
          <div class="lesson-section">
            <h3>Spreadsheets in the Cloud ☁️</h3>
            <p><strong>Google Sheets</strong> is Google's free, online spreadsheet tool. It works very similarly to Microsoft Excel, but it lives in your browser and automatically saves to the cloud (Google Drive)!</p>
          </div>

          <div class="lesson-section">
            <h3>Google Sheets vs Excel</h3>
            <ul>
              <li>☁️ <strong>Google Sheets:</strong> Free, online, auto-saves, easy collaboration</li>
              <li>💻 <strong>Excel:</strong> More powerful for complex analysis, works offline</li>
            </ul>
            <p style="margin-top:10px;">For most everyday tasks, Google Sheets can do everything you need! And the best part — multiple people can edit the same spreadsheet at the same time.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>Excel is like a powerful <strong>desktop calculator</strong> — great for heavy-duty math. Google Sheets is like a <strong>shared whiteboard in the cloud</strong> — multiple people can write on it at the same time from anywhere in the world!</p>
          </div>

          <div class="lesson-section">
            <h3>Getting Started with Google Sheets</h3>
            <ol>
              <li>Go to <strong>sheets.google.com</strong> (you need a Google account)</li>
              <li>Click the <strong>+ Blank</strong> button to create a new spreadsheet</li>
              <li>Click the title at the top to rename it</li>
              <li>Start typing in cells — just like Excel!</li>
            </ol>
          </div>

          <div class="info-box">
            <div class="info-icon">🔄</div>
            <p><strong>Great news:</strong> Everything you learn about Google Sheets applies to Excel too, and vice versa! The formulas, keyboard shortcuts, and concepts are almost identical. If you learn one, you basically know the other!</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Open Google Sheets (sheets.google.com) and create a new blank spreadsheet. Name it "My Practice Sheet". Then type the numbers 1 through 5 in cells A1 through A5. What happens when you press Enter after each number?</div>
            <textarea class="practice-input" id="practice-sheets-1" placeholder="When I press Enter..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('sheets-1', 'sheets')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-sheets-1"></div>
          </div>

          <div id="quiz-sheets-1"></div>
        `,
        quiz: {
          question: 'What is a key advantage of Google Sheets over Microsoft Excel?',
          options: ['Google Sheets has more formulas', 'Multiple people can edit the same spreadsheet at the same time', 'Google Sheets works better offline', 'Google Sheets can handle bigger files'],
          correct: 1,
          explanation: 'One of Google Sheets\' biggest advantages is <strong>real-time collaboration</strong>. Multiple people can open and edit the same spreadsheet simultaneously, seeing each other\'s changes instantly. This makes teamwork much easier than emailing Excel files back and forth!'
        }
      }
    ]
  },
  {
    id: 'vscode',
    name: 'VS Code',
    emoji: '💻',
    color: '#007acc',
    gradient: 'linear-gradient(135deg, #007acc, #005a9e)',
    description: 'Master the most popular code editor',
    lessons: [
      {
        id: 'vscode-1',
        title: 'What is VS Code?',
        xp: 10,
        checklist: ['Understand what VS Code is', 'Download and install VS Code', 'Explore the interface'],
        content: `
          <div class="lesson-section">
            <h3>Your Coding Home Base 💻</h3>
            <p><strong>Visual Studio Code</strong> (VS Code) is a free, lightweight code editor made by Microsoft. It's where you'll write most of your code — HTML, CSS, JavaScript, TypeScript, and more!</p>
            <p style="margin-top:10px;">It's the <strong>#1 most popular code editor in the world</strong> — used by beginners and professional developers alike.</p>
          </div>

          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy</div>
            <p>VS Code is like <strong>Microsoft Word, but for code</strong>. Just as Word helps you write documents with spell-check, formatting, and templates — VS Code helps you write code with syntax highlighting, error detection, and autocomplete.</p>
          </div>

          <div class="lesson-section">
            <h3>Why VS Code is Amazing</h3>
            <ul>
              <li>🎨 <strong>Syntax highlighting</strong> — Colors your code to make it easier to read</li>
              <li>🔍 <strong>IntelliSense</strong> — Autocomplete suggestions as you type</li>
              <li>🐛 <strong>Error detection</strong> — Highlights mistakes in real-time</li>
              <li>🔌 <strong>Extensions</strong> — Install plugins to add features</li>
              <li>📁 <strong>File explorer</strong> — Manage your project files</li>
              <li>🖥️ <strong>Integrated terminal</strong> — Run commands without leaving the editor</li>
              <li>💰 <strong>Free!</strong> — 100% free and open-source</li>
            </ul>
          </div>

          <div class="lesson-section">
            <h3>How to Install VS Code</h3>
            <ol>
              <li>Go to <strong>code.visualstudio.com</strong></li>
              <li>Click the big <strong>Download</strong> button for your operating system (Windows/Mac/Linux)</li>
              <li>Run the installer and follow the steps</li>
              <li>Open VS Code — you're ready!</li>
            </ol>
          </div>

          <div class="info-box">
            <div class="info-icon">🌈</div>
            <p><strong>First thing to do:</strong> Change the color theme! Go to File → Preferences → Color Theme. Popular choices are "Dark+ (Default Dark)", "One Dark Pro", or "Dracula". Pick one you like — you'll be staring at it for a long time!</p>
          </div>

          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Download and open VS Code. Tell me: what <strong>color theme</strong> did you choose? And what is the first thing you notice about the VS Code interface?</div>
            <textarea class="practice-input" id="practice-vscode-1" placeholder="I chose... and I noticed..."></textarea>
            <br/><br/>
            <button class="btn-check" onclick="checkPractice('vscode-1', 'vscode')">
              <i class="fas fa-check"></i> Check My Answer
            </button>
            <div class="answer-feedback" id="feedback-vscode-1"></div>
          </div>

          <div id="quiz-vscode-1"></div>
        `,
        quiz: {
          question: 'What is VS Code?',
          options: ['A web browser', 'A database management tool', 'A free, popular code editor made by Microsoft', 'A programming language'],
          correct: 2,
          explanation: '<strong>Visual Studio Code (VS Code)</strong> is a free, open-source code editor created by Microsoft. It\'s the most popular code editor in the world and supports virtually all programming languages through extensions and built-in features.'
        }
      }
    ]
  }
];
