/* LearnPath Full 10-Topic Curriculum */
const TOPICS = [
  {
    id: "payload-cms",
    name: "Payload CMS",
    emoji: "📦",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
    description:
      "Build powerful headless content management systems with TypeScript and Next.js",
    lessons: [
      {
        id: "payload-1",
        title: "What is a CMS?",
        xp: 10,
        checklist: [
          "Read the explanation",
          "Understand the newspaper analogy",
          "Complete the practice task",
          "Pass the quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Let's Start at the Beginning 🌟</h3>
            <p>Before we dive into Payload CMS, we need to understand what a <strong>CMS</strong> even is. Don't worry — it's much simpler than it sounds!</p>
            <p style="margin-top:10px;">CMS stands for <strong>Content Management System</strong>.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Real-world Analogy</div>
            <p>Think of a website like a <strong>newspaper</strong>. The newspaper has articles, photos, and headlines. Now imagine two people: the <strong>editor</strong> who writes and updates the articles, and the <strong>printer</strong> who operates the giant press. A CMS is the editor's desk — it lets you <strong>create, edit, and publish content</strong> without touching any machinery or code underneath.</p>
          </div>
          <div class="lesson-section">
            <h3>So What Exactly Does a CMS Do?</h3>
            <ul>
              <li>✅ <strong>Write & Publish:</strong> Write blog posts or articles in a friendly visual text editor.</li>
              <li>✅ <strong>Media Management:</strong> Upload images and videos and organize them neatly.</li>
              <li>✅ <strong>User Permissions:</strong> Allow editors to write, authors to draft, and admins to manage.</li>
              <li>✅ <strong>Instant Updates:</strong> Click "Save" and your content updates immediately without redeploying code.</li>
            </ul>
          </div>
          <div class="info-box"><div class="info-icon">💡</div><p><strong>Fun fact:</strong> WordPress powers over 40% of all websites on the internet — and it's a CMS! But modern teams often want something faster, more secure, and completely tailored to custom apps: that's where modern headless CMSs shine.</p></div>
          <div class="lesson-section">
            <h3>Traditional vs Headless CMS</h3>
            <div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;margin-top:10px;">
              <thead><tr style="background:rgba(124,58,237,0.08);">
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Feature</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Traditional CMS (e.g. WordPress)</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Headless CMS (e.g. Payload)</th>
              </tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><strong>Frontend & Backend</strong></td><td style="padding:10px 14px;">Tightly coupled together</td><td style="padding:10px 14px;">Completely separate ("Headless")</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><strong>Data Delivery</strong></td><td style="padding:10px 14px;">Renders HTML templates</td><td style="padding:10px 14px;">Sends clean JSON through an API</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><strong>Where Content Can Go</strong></td><td style="padding:10px 14px;">Only the website itself</td><td style="padding:10px 14px;">Websites, mobile apps, smart watches, IoT!</td></tr>
              </tbody>
            </table></div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In your own words, explain what a CMS is to a friend who has never written a line of code. Write 1–3 sentences below.</div>
            <textarea class="practice-input" id="practice-payload-1" placeholder="A CMS is a tool that lets someone..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-1','cms')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-1"></div>
          </div>
          <div id="quiz-payload-1"></div>`,
        quiz: {
          question: "What does CMS stand for?",
          options: [
            "Code Management System",
            "Content Management System",
            "Computer Monitoring Software",
            "Creative Media Suite",
          ],
          correct: 1,
          explanation:
            "CMS stands for <strong>Content Management System</strong> — a platform that helps you create, edit, organize, and publish digital content without needing to write code every time.",
        },
      },
      {
        id: "payload-2",
        title: "What is Payload CMS?",
        xp: 15,
        checklist: [
          "Understand what makes Payload unique",
          "Learn code-first architecture",
          "Complete the practice task",
        ],
        content: `
          <div class="lesson-section">
            <h3>Meet Payload CMS 🚀</h3>
            <p><strong>Payload CMS</strong> is an open-source, full-stack headless CMS built with <strong>TypeScript</strong> and <strong>Node.js / Next.js</strong>. It was designed from the ground up for developers who want full control over their code, database, and admin panel.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Custom Architecture</div>
            <p>If WordPress is a <strong>pre-furnished apartment</strong> where you cannot knock down walls or change the plumbing without breaking things — Payload CMS is an <strong>architect's dream blueprint</strong>. You own every room, choose your own materials, and build exactly what your application requires.</p>
          </div>
          <div class="lesson-section">
            <h3>Why Developers Choose Payload</h3>
            <ul>
              <li>🔧 <strong>Code-First:</strong> Define your schemas in pure TypeScript. No clunky web forms to create database tables.</li>
              <li>⚡ <strong>Automatic APIs:</strong> Instant REST and GraphQL APIs generated for every collection you define.</li>
              <li>🎨 <strong>Customizable React Admin:</strong> A sleek, modern dashboard that you can customize with your own React components.</li>
              <li>🔒 <strong>Built-In Authentication:</strong> Secure password hashing, JWT tokens, email verification, and role-based permissions ready to go.</li>
              <li>💾 <strong>Your Database:</strong> Connect to MongoDB, PostgreSQL, SQLite, or MySQL with complete ownership of your data.</li>
            </ul>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Name <strong>two key differences</strong> between Payload CMS and a traditional CMS like WordPress.</div>
            <textarea class="practice-input" id="practice-payload-2" placeholder="1. Payload is code-first...\n2. Payload is headless..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-2','payload-features')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-2"></div>
          </div>
          <div id="quiz-payload-2"></div>`,
        quiz: {
          question: 'What does "Headless" mean in the context of Payload CMS?',
          options: [
            "The CMS runs without a computer server",
            "The CMS stores content and provides an API, but does not dictate the frontend display",
            "The CMS cannot have any images or headers",
            "The CMS has no admin user account",
          ],
          correct: 1,
          explanation:
            "<strong>Headless</strong> means the content management (backend) is decoupled from the presentation layer (frontend). Content is served via an API (usually JSON), allowing any frontend to render it!",
        },
      },
      {
        id: "payload-3",
        title: "Installing & Setting Up Payload",
        xp: 20,
        checklist: [
          "Verify Node.js version",
          "Run the setup wizard command",
          "Explore the generated project structure",
        ],
        content: `
          <div class="lesson-section">
            <h3>Starting Your First Payload Project ⚙️</h3>
            <p>Setting up Payload takes only a single terminal command. Let's walk through it step-by-step!</p>
          </div>
          <div class="info-box"><div class="info-icon">📋</div><p><strong>Prerequisite:</strong> You need <strong>Node.js v18 or newer</strong> installed on your computer. You can test this by opening your terminal and typing <code>node -v</code>.</p></div>
          <div class="lesson-section">
            <h3>The Installation Command</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Terminal (Bash / PowerShell)</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre>npx create-payload-app@latest</pre>
            </div>
          </div>
          <div class="code-explanation">
            <h4>What Happens When You Run This:</h4>
            <div class="code-line-explain"><span class="line-num">1</span><span class="line-desc"><strong>npx</strong> — Executes the official installer without needing to permanently install it globally.</span></div>
            <div class="code-line-explain"><span class="line-num">2</span><span class="line-desc"><strong>Project Name</strong> — You will be prompted to type a name (e.g. <code>my-payload-cms</code>).</span></div>
            <div class="code-line-explain"><span class="line-num">3</span><span class="line-desc"><strong>Template Choice</strong> — Choose "Blank" for full control or "Website" / "E-commerce" for prebuilt starter collections.</span></div>
            <div class="code-line-explain"><span class="line-num">4</span><span class="line-desc"><strong>Database Choice</strong> — Choose SQLite or PostgreSQL for relational data, or MongoDB for document storage.</span></div>
          </div>
          <div class="lesson-section">
            <h3>Understanding the Project Structure</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Folder Structure</span></div>
              <pre>my-payload-cms/
├── src/
│   ├── collections/        <span class="comment"># Define your content types (Posts, Users, etc.)</span>
│   │   ├── Posts.ts
│   │   └── Users.ts
│   └── payload.config.ts   <span class="comment"># The heart: registers collections, plugins, db</span>
├── .env                    <span class="comment"># Secret keys & database connection URL</span>
├── package.json            <span class="comment"># Project dependencies & start scripts</span>
└── tsconfig.json           <span class="comment"># TypeScript configuration</span></pre>
            </div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">What file is considered the "brain" or heart of a Payload CMS application where collections and plugins are registered?</div>
            <textarea class="practice-input" id="practice-payload-3" placeholder="The heart of Payload is..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-3','config-collections')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-3"></div>
          </div>
          <div id="quiz-payload-3"></div>`,
        quiz: {
          question:
            "What tool command is used to launch the official Payload project creation wizard?",
          options: [
            "npm install payload",
            "npx create-payload-app@latest",
            "git clone payload-cms",
            "payload new site",
          ],
          correct: 1,
          explanation:
            "<strong>npx create-payload-app@latest</strong> runs the interactive wizard that scaffolds your project, dependencies, database adapter, and TypeScript config in seconds.",
        },
      },
      {
        id: "payload-4",
        title: "Collections & Fields",
        xp: 25,
        checklist: [
          "Learn what a Collection is",
          "Explore fundamental Field types",
          "Write a Posts collection in TypeScript",
        ],
        content: `
          <div class="lesson-section">
            <h3>Collections: The Building Blocks of Data 🧱</h3>
            <p>In Payload CMS, a <strong>Collection</strong> defines a specific type of content. Think of a collection as a database table or a spreadsheet tab (like "Blog Posts", "Products", or "Team Members").</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Forms and Records</div>
            <p>A <strong>Collection</strong> is like a blank form template (Title, Date, Body, Author). Each time an editor fills out that form and clicks save, they create a <strong>Document</strong> (a single record or row) inside that collection.</p>
          </div>
          <div class="lesson-section">
            <h3>Writing a Collection in TypeScript</h3>
            <p>Every collection is exported as an object adhering to the <code>CollectionConfig</code> type:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">src/collections/Posts.ts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="keyword">import</span> { CollectionConfig } <span class="keyword">from</span> <span class="string">'payload/types'</span>

<span class="keyword">export const</span> Posts: CollectionConfig = {
  slug: <span class="string">'posts'</span>,              <span class="comment">// The unique URL & database identifier</span>
  admin: {
    useAsTitle: <span class="string">'title'</span>,      <span class="comment">// Field to display as row title in admin panel</span>
  },
  fields: [
    {
      name: <span class="string">'title'</span>,          <span class="comment">// Field key in database & API output</span>
      type: <span class="string">'text'</span>,           <span class="comment">// Single-line string input</span>
      required: <span class="keyword">true</span>,        <span class="comment">// Cannot be left empty</span>
    },
    {
      name: <span class="string">'content'</span>,
      type: <span class="string">'richText'</span>,       <span class="comment">// WYSIWYG editor for rich formatting</span>
    },
    {
      name: <span class="string">'publishedDate'</span>,
      type: <span class="string">'date'</span>,           <span class="comment">// Date picker</span>
    },
    {
      name: <span class="string">'status'</span>,
      type: <span class="string">'select'</span>,
      options: [
        { label: <span class="string">'Draft'</span>, value: <span class="string">'draft'</span> },
        { label: <span class="string">'Published'</span>, value: <span class="string">'published'</span> },
      ],
      defaultValue: <span class="string">'draft'</span>,
    },
  ],
}</pre>
            </div>
          </div>
          <div class="code-explanation">
            <h4>Common Payload Field Types:</h4>
            <div class="code-line-explain"><span class="line-num">text</span><span class="line-desc">Short single-line text (names, titles, summaries).</span></div>
            <div class="code-line-explain"><span class="line-num">number</span><span class="line-desc">Numeric values (prices, quantities, ratings).</span></div>
            <div class="code-line-explain"><span class="line-num">richText</span><span class="line-desc">Formatted text with bold, italics, headers, lists, links.</span></div>
            <div class="code-line-explain"><span class="line-num">select</span><span class="line-desc">Dropdown menu with predefined options.</span></div>
            <div class="code-line-explain"><span class="line-num">upload</span><span class="line-desc">Relationship to an uploaded image or document file.</span></div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">If you were creating a <strong>Products</strong> collection for an online store, list at least 4 fields you would define and their types.</div>
            <textarea class="practice-input" id="practice-payload-4" placeholder="1. name (text)\n2. price (number)..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-4','products')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-4"></div>
          </div>
          <div id="quiz-payload-4"></div>`,
        quiz: {
          question:
            "What property in a CollectionConfig defines the unique database and API identifier?",
          options: ["name", "id", "slug", "key"],
          correct: 2,
          explanation:
            'The <strong>slug</strong> property defines the unique name of the collection (e.g. "posts"). Payload uses this slug for the API routes (/api/posts) and admin panel navigation.',
        },
      },
      {
        id: "payload-5",
        title: "Users, Roles & Authentication",
        xp: 25,
        checklist: [
          "Enable auth on a collection",
          "Understand role-based access control",
          "Define access control functions",
        ],
        content: `
          <div class="lesson-section">
            <h3>Built-In Security & Logins 🔐</h3>
            <p>Most web frameworks make you configure Passport, JWT tokens, cookies, and salt rounds from scratch. In Payload CMS, any collection can be turned into a fully functional authentication system with one line: <code>auth: true</code>!</p>
          </div>
          <div class="lesson-section">
            <h3>Creating an Auth-Enabled Users Collection</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">src/collections/Users.ts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="keyword">import</span> { CollectionConfig } <span class="keyword">from</span> <span class="string">'payload/types'</span>

<span class="keyword">export const</span> Users: CollectionConfig = {
  slug: <span class="string">'users'</span>,
  auth: <span class="keyword">true</span>,                 <span class="comment">// Automatically adds email, password, login/logout routes</span>
  admin: {
    useAsTitle: <span class="string">'email'</span>,
  },
  access: {
    read: () => <span class="keyword">true</span>,         <span class="comment">// Anyone can view user profile info</span>
    create: () => <span class="keyword">true</span>,       <span class="comment">// Anyone can sign up</span>
    update: ({ req: { user } }) => ({ id: { equals: user?.id } }), <span class="comment">// Users can only edit themselves</span>
  },
  fields: [
    {
      name: <span class="string">'role'</span>,
      type: <span class="string">'select'</span>,
      options: [
        { label: <span class="string">'Admin'</span>, value: <span class="string">'admin'</span> },
        { label: <span class="string">'Editor'</span>, value: <span class="string">'editor'</span> },
        { label: <span class="string">'Customer'</span>, value: <span class="string">'customer'</span> },
      ],
      defaultValue: <span class="string">'customer'</span>,
      required: <span class="keyword">true</span>,
    },
  ],
}</pre>
            </div>
          </div>
          <div class="info-box"><div class="info-icon">🛡️</div><p><strong>Granular Access Control:</strong> Payload lets you define access rules per operation (<code>create</code>, <code>read</code>, <code>update</code>, <code>delete</code>) and even per field! For instance, only users with role "admin" can edit the "role" field.</p></div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Think of an educational platform with Teachers, Students, and Administrators. Describe what access each role should have to create and view grades.</div>
            <textarea class="practice-input" id="practice-payload-5" placeholder="Admins can...\nTeachers can...\nStudents can..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-5','roles')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-5"></div>
          </div>
          <div id="quiz-payload-5"></div>`,
        quiz: {
          question:
            "What property activates password hashing, email login, and JWT token management on a collection?",
          options: [
            "security: true",
            "login: true",
            "auth: true",
            "users: true",
          ],
          correct: 2,
          explanation:
            "Setting <strong>auth: true</strong> in a collection configuration automatically equips it with secure password hashing, login/logout endpoints, and session token generation.",
        },
      },
      {
        id: "payload-6",
        title: "The Automatic REST API",
        xp: 20,
        checklist: [
          "Learn standard REST endpoints",
          "Understand query filters & pagination",
          "Send your first GET request",
        ],
        content: `
          <div class="lesson-section">
            <h3>Instant APIs for Your Frontend 📡</h3>
            <p>Every time you create a collection (like <code>posts</code>), Payload automatically generates a complete suite of standard HTTP REST endpoints.</p>
          </div>
          <div class="lesson-section">
            <h3>Standard REST Endpoints:</h3>
            <div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;margin-top:10px;">
              <thead><tr style="background:rgba(124,58,237,0.08);">
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Method</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Endpoint URL</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Action</th>
              </tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><span class="tag" style="background:#dcfce7;color:#166534;font-weight:700;">GET</span></td><td style="padding:10px 14px;"><code>/api/posts</code></td><td style="padding:10px 14px;">Find all posts (with pagination & sorting)</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><span class="tag" style="background:#dcfce7;color:#166534;font-weight:700;">GET</span></td><td style="padding:10px 14px;"><code>/api/posts/:id</code></td><td style="padding:10px 14px;">Find a single post by its unique ID</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><span class="tag" style="background:#dbeafe;color:#1e40af;font-weight:700;">POST</span></td><td style="padding:10px 14px;"><code>/api/posts</code></td><td style="padding:10px 14px;">Create a new post</td></tr>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><span class="tag" style="background:#fef3c7;color:#854d0e;font-weight:700;">PATCH</span></td><td style="padding:10px 14px;"><code>/api/posts/:id</code></td><td style="padding:10px 14px;">Update an existing post</td></tr>
                <tr><td style="padding:10px 14px;"><span class="tag" style="background:#fee2e2;color:#991b1b;font-weight:700;">DELETE</span></td><td style="padding:10px 14px;"><code>/api/posts/:id</code></td><td style="padding:10px 14px;">Delete a post permanently</td></tr>
              </tbody>
            </table></div>
          </div>
          <div class="lesson-section">
            <h3>Filtering & Querying with URL Parameters</h3>
            <p>You can search and filter directly using query parameters in your URL:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">HTTP Query Examples</span></div>
              <pre><span class="comment">// Only published posts</span>
GET /api/posts?where[status][equals]=published

<span class="comment">// Sort newest first, page 1, 10 per page</span>
GET /api/posts?sort=-publishedDate&page=1&limit=10</pre>
            </div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">If you want to fetch the post with ID "abc123", what HTTP method and URL would you call?</div>
            <textarea class="practice-input" id="practice-payload-6" placeholder="GET /api/..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-6','api')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-6"></div>
          </div>
          <div id="quiz-payload-6"></div>`,
        quiz: {
          question:
            "Which HTTP method is used to create a brand new document in a Payload collection?",
          options: ["GET", "POST", "PUT", "PATCH"],
          correct: 1,
          explanation:
            "In standard REST architecture, <strong>POST</strong> is used to create a new resource, while GET reads, PATCH updates, and DELETE removes.",
        },
      },
      {
        id: "payload-7",
        title: "Hooks in Payload CMS",
        xp: 25,
        checklist: [
          "Understand what a Hook is",
          "Explore beforeChange and afterRead hooks",
          "Write an automated slug generation hook",
        ],
        content: `
          <div class="lesson-section">
            <h3>Automating Logic with Hooks 🎣</h3>
            <p><strong>Hooks</strong> are custom functions that run automatically at specific moments during a document's lifecycle. Think of them as event listeners for your database.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Security Gate</div>
            <p>Imagine entering an office building. A security guard inspects your badge <em>before</em> you enter (<strong>beforeChange</strong>). Once you are inside, a receptionist hands you a guest badge (<strong>afterRead</strong>). Hooks do the exact same thing to incoming and outgoing data!</p>
          </div>
          <div class="lesson-section">
            <h3>Example: Auto-generating a URL Slug</h3>
            <p>Instead of making authors type <code>my-first-post</code>, a hook can automatically transform the Title into a URL-friendly slug:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">src/collections/Posts.ts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="keyword">export const</span> Posts: CollectionConfig = {
  slug: <span class="string">'posts'</span>,
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        <span class="keyword">if</span> (operation === <span class="string">'create'</span> && data.title) {
          <span class="comment">// Automatically convert "Hello World!" -> "hello-world"</span>
          data.slug = data.title.toLowerCase().replace(/ /g, <span class="string">'-'</span>)
        }
        <span class="keyword">return</span> data
      },
    ],
    afterChange: [
      ({ doc }) => {
        console.log(<span class="string">'Document saved successfully:'</span>, doc.id)
        <span class="comment">// You could send an email notification here!</span>
      },
    ],
  },
  fields: [ <span class="comment">/* fields here */</span> ],
}</pre>
            </div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Name two practical things you could do inside an <code>afterChange</code> hook after an author publishes a blog post.</div>
            <textarea class="practice-input" id="practice-payload-7" placeholder="1. Send an email notification...\n2. Invalidate cache..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-7','payload-features')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-7"></div>
          </div>
          <div id="quiz-payload-7"></div>`,
        quiz: {
          question: 'When does a "beforeChange" hook run in Payload CMS?',
          options: [
            "After the document is written to the database",
            "Right before data is validated and saved to the database",
            "Only when a user logs in",
            "When the server restarts",
          ],
          correct: 1,
          explanation:
            "<strong>beforeChange</strong> executes right before saving to the database, giving you the opportunity to validate, sanitize, format, or transform data before it persists.",
        },
      },
      {
        id: "payload-8",
        title: "Media & File Uploads",
        xp: 20,
        checklist: [
          "Enable upload on a collection",
          "Configure image resize presets",
          "Link media to other collections",
        ],
        content: `
          <div class="lesson-section">
            <h3>Handling Images, PDFs & Files 🖼️</h3>
            <p>Every website needs images, avatars, or PDF downloads. Payload handles file uploads natively without requiring third-party plugins.</p>
          </div>
          <div class="lesson-section">
            <h3>Creating a Media Collection</h3>
            <p>Simply set <code>upload: true</code> or provide an upload configuration object:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">src/collections/Media.ts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="keyword">export const</span> Media: CollectionConfig = {
  slug: <span class="string">'media'</span>,
  upload: {
    staticURL: <span class="string">'/media'</span>,
    staticDir: <span class="string">'media'</span>,
    imageSizes: [
      { name: <span class="string">'thumbnail'</span>, width: <span class="number">400</span>, height: <span class="number">300</span>, crop: <span class="string">'center'</span> },
      { name: <span class="string">'hero'</span>, width: <span class="number">1200</span>, height: <span class="number">630</span>, crop: <span class="string">'center'</span> },
    ],
    adminThumbnail: <span class="string">'thumbnail'</span>,
    mimeTypes: [<span class="string">'image/*'</span>],   <span class="comment">// Only allow image files</span>
  },
  fields: [
    {
      name: <span class="string">'alt'</span>,
      type: <span class="string">'text'</span>,
      required: <span class="keyword">true</span>,        <span class="comment">// Crucial for web accessibility!</span>
    },
  ],
}</pre>
            </div>
          </div>
          <div class="tip-card"><div class="tip-icon">📐</div><p><strong>Automatic Resizing:</strong> Payload automatically generates every image size defined in <code>imageSizes</code> upon upload! This means your mobile visitors load lightweight thumbnails instead of multi-megabyte originals.</p></div>
          <div id="quiz-payload-8"></div>`,
        quiz: {
          question:
            "What property in a CollectionConfig turns it into a file upload handler?",
          options: [
            "files: true",
            "storage: true",
            "upload: true",
            "media: true",
          ],
          correct: 2,
          explanation:
            "Setting <strong>upload: true</strong> (or specifying upload configuration options) designates the collection as an upload collection capable of storing files and resizing images.",
        },
      },
      {
        id: "payload-9",
        title: "Relationships & Global Settings",
        xp: 25,
        checklist: [
          "Link collections together with relationship fields",
          "Understand singletons/Globals",
          "Create a SiteSettings global",
        ],
        content: `
          <div class="lesson-section">
            <h3>Connecting Data Together 🔗</h3>
            <p>Real-world applications are not isolated islands. A blog post has an <strong>Author</strong> (from the Users collection) and several <strong>Tags</strong> or <strong>Categories</strong>. In Payload, you connect them using the <code>relationship</code> field.</p>
          </div>
          <div class="lesson-section">
            <h3>The Relationship Field</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">In src/collections/Posts.ts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre>{
  name: <span class="string">'author'</span>,
  type: <span class="string">'relationship'</span>,
  relationTo: <span class="string">'users'</span>,        <span class="comment">// Points to the 'users' collection!</span>
  required: <span class="keyword">true</span>,
}</pre>
            </div>
            <p style="margin-top:10px;">When fetching <code>/api/posts?depth=1</code>, Payload automatically populates the full author object so you don't need manual database joins!</p>
          </div>
          <div class="lesson-section">
            <h3>What are Globals?</h3>
            <p>A <strong>Collection</strong> has many documents (many posts, many users). A <strong>Global</strong> is a singleton — there is only ONE of it in the entire system. Perfect for:</p>
            <ul>
              <li>🌐 <strong>Site Settings:</strong> Site title, SEO metadata, contact email.</li>
              <li>🧭 <strong>Navigation Menu:</strong> Header links and footer copyright text.</li>
            </ul>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">Why would a "Header Navigation" be defined as a Global instead of a Collection in Payload CMS?</div>
            <textarea class="practice-input" id="practice-payload-9" placeholder="A header is a Global because..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('payload-9','config-collections')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-payload-9"></div>
          </div>
          <div id="quiz-payload-9"></div>`,
        quiz: {
          question:
            "What is the main difference between a Collection and a Global in Payload CMS?",
          options: [
            "Collections require SQL, Globals use MongoDB",
            "A Collection contains multiple documents; a Global has only one single record",
            "Globals cannot have fields",
            "Collections cannot have APIs",
          ],
          correct: 1,
          explanation:
            "A <strong>Collection</strong> is a list of multiple items (like hundreds of blog posts), whereas a <strong>Global</strong> is a singleton containing a single instance of data (like site-wide navigation settings).",
        },
      },
      {
        id: "payload-10",
        title: "Milestone Project & Multi-Quiz: Blog CMS",
        xp: 40,
        checklist: [
          "Review all Payload concepts",
          "Understand full CMS architecture",
          "Complete the 4-question Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 1 Capstone: The Full Blog CMS 🏆</h3>
            <p>Congratulations on reaching the end of Topic 1! You now understand what a headless CMS is, how Payload works with TypeScript, how collections and fields are structured, how authentication works, and how to query APIs.</p>
          </div>
          <div class="success-card">
            <div class="suc-icon">🎯</div>
            <p><strong>Your Milestone Challenge:</strong> Take the 4-question Master Quiz below. A score of 75% or higher earns you the Payload CMS Master Badge and completes Topic 1!</p>
          </div>
          <div id="multi-quiz-payload-10"></div>`,
        quizzes: [
          {
            question:
              "Which of the following describes Payload CMS most accurately?",
            options: [
              "A traditional WordPress plugin written in PHP",
              "A code-first headless CMS built with TypeScript and Next.js",
              "A frontend CSS styling framework",
              "A browser-only database",
            ],
            correct: 1,
            explanation:
              "Payload CMS is a code-first, headless CMS built using TypeScript that gives developers full control over their backend and admin panel.",
          },
          {
            question:
              "Where do you register your collections, database adapters, and admin panel plugins in a Payload project?",
            options: [
              "package.json",
              "src/payload.config.ts",
              "src/index.html",
              ".env",
            ],
            correct: 1,
            explanation:
              "<strong>payload.config.ts</strong> is the central configuration file that registers all collections, globals, plugins, and database connections.",
          },
          {
            question:
              "How does a frontend application (like Next.js or React) fetch content from Payload CMS?",
            options: [
              "By running direct SQL queries in the user browser",
              "Through automatically generated REST or GraphQL APIs (/api/posts)",
              "By reading the server hard drive directly",
              "By copying files manually",
            ],
            correct: 1,
            explanation:
              "Payload automatically generates clean REST (/api/posts) and GraphQL APIs that frontend applications call using standard fetch requests.",
          },
          {
            question:
              "Which field type links a blog post document to a specific user record from another collection?",
            options: [
              'type: "pointer"',
              'type: "relationship"',
              'type: "foreignKey"',
              'type: "link"',
            ],
            correct: 1,
            explanation:
              "The <strong>relationship</strong> field type creates links between documents across collections, with automatic population support.",
          },
        ],
      },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    emoji: "🐙",
    color: "#1d4ed8",
    gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
    description:
      "Master version control, Git branching, collaboration, and repository hosting",
    lessons: [
      {
        id: "github-1",
        title: "What is Git & GitHub?",
        xp: 10,
        checklist: [
          "Understand the difference between Git and GitHub",
          "Learn why version control is essential",
          "Complete the practice task",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Time Machine for Code ⏳</h3>
            <p>Every developer needs a way to save their progress, experiment without fear of breaking things, and collaborate with others. That is what <strong>Git</strong> and <strong>GitHub</strong> are for.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Video Game Save Points</div>
            <p>Imagine playing an adventure game. Before fighting a huge boss, you make a <strong>save point</strong>. If things go wrong, you reload that save. <strong>Git</strong> is that save system for your code. You can travel back to any save point at any time in history!</p>
          </div>
          <div class="lesson-section">
            <h3>Git vs GitHub: The Essential Distinction</h3>
            <div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;margin-top:10px;">
              <thead><tr style="background:rgba(29,78,216,0.08);">
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Tool</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">What It Is</th>
                <th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border);">Where It Runs</th>
              </tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border);"><td style="padding:10px 14px;"><strong>Git</strong></td><td style="padding:10px 14px;">A command-line program that tracks file changes over time.</td><td style="padding:10px 14px;">Locally on your personal computer (offline).</td></tr>
                <tr><td style="padding:10px 14px;"><strong>GitHub</strong></td><td style="padding:10px 14px;">A cloud website that hosts your Git repositories and enables teamwork.</td><td style="padding:10px 14px;">In the cloud at github.com (online).</td></tr>
              </tbody>
            </table></div>
          </div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">In your own words, explain the difference between <strong>Git</strong> and <strong>GitHub</strong> in 1–2 sentences.</div>
            <textarea class="practice-input" id="practice-github-1" placeholder="Git is... while GitHub is..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('github-1','git-github')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-github-1"></div>
          </div>
          <div id="quiz-github-1"></div>`,
        quiz: {
          question: "Which of the following statements is TRUE?",
          options: [
            "Git and GitHub are the exact same program",
            "Git is the version control tool on your computer; GitHub is the website hosting your repos online",
            "You cannot use Git without paying for a GitHub subscription",
            "GitHub replaces the need for a code editor",
          ],
          correct: 1,
          explanation:
            "<strong>Git</strong> is the local command-line version control software. <strong>GitHub</strong> is an online hosting platform where developers store backups and collaborate on Git repositories.",
        },
      },
      {
        id: "github-2",
        title: "Your First Repository",
        xp: 15,
        checklist: [
          "Understand what a Repository is",
          "Learn the git init command",
          "Explore Public vs Private repos",
        ],
        content: `
          <div class="lesson-section">
            <h3>What is a Repository? 📁</h3>
            <p>A <strong>Repository</strong> (often nicknamed "repo") is simply a project folder that Git is tracking. Inside that folder, Git keeps a hidden record (<code>.git</code>) of every single change you make.</p>
          </div>
          <div class="lesson-section">
            <h3>Two Ways to Create a Repo</h3>
            <div class="timeline">
              <div class="timeline-item">
                <h4>Method 1: Start Locally on your PC</h4>
                <p>Navigate to your project folder in your terminal and type:</p>
                <div class="code-block"><pre>git init</pre></div>
                <p>This tells Git: <em>"Start watching this folder and tracking changes!"</em></p>
              </div>
              <div class="timeline-item">
                <h4>Method 2: Start on GitHub.com</h4>
                <p>Click the green <strong>"New"</strong> button on GitHub, name your repo, choose Public or Private, and check "Add a README file".</p>
              </div>
            </div>
          </div>
          <div class="tip-card"><div class="tip-icon">📖</div><p><strong>The README.md File:</strong> Every good repo includes a <code>README.md</code>. It acts as the front cover of your book, telling visitors what the project is, why it was created, and how to run it.</p></div>
          <div class="practice-box">
            <div class="practice-label"><i class="fas fa-pencil-alt"></i> Practice Task</div>
            <div class="practice-task">If you were building a personal portfolio website, what would you name the repo, and would you make it Public or Private? Why?</div>
            <textarea class="practice-input" id="practice-github-2" placeholder="I would name it... and make it... because..."></textarea><br/><br/>
            <button class="btn-check" onclick="checkPractice('github-2','repo')"><i class="fas fa-check"></i> Check My Answer</button>
            <div class="answer-feedback" id="feedback-github-2"></div>
          </div>
          <div id="quiz-github-2"></div>`,
        quiz: {
          question:
            "What command initializes a new Git repository in your current folder?",
          options: ["git start", "git init", "git create", "git new"],
          correct: 1,
          explanation:
            "<strong>git init</strong> initializes an empty Git repository in the current directory by creating a hidden .git folder where version history is saved.",
        },
      },
      {
        id: "github-3",
        title: "Making Your First Commit",
        xp: 20,
        checklist: [
          "Understand the 3 Git areas",
          "Use git add to stage files",
          "Use git commit with a clear message",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Git Workflow: Stage then Commit 📸</h3>
            <p>Saving work in Git is a two-step process: you choose which files to include (<strong>staging</strong>), and then you take a permanent snapshot (<strong>committing</strong>).</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Packing a Shipping Box</div>
            <p>1. <strong>Working Directory:</strong> The items scattered on your desk.<br>
            2. <strong>Staging Area (<code>git add</code>):</strong> Placing specific items inside the box.<br>
            3. <strong>Commit (<code>git commit</code>):</strong> Taping the box shut and stamping it with a label describing what's inside.</p>
          </div>
          <div class="lesson-section">
            <h3>The Essential Commands</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Git Terminal</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="comment"># 1. Check what has changed</span>
git status

<span class="comment"># 2. Add all modified files to the staging box</span>
git add .

<span class="comment"># 3. Create a snapshot with a descriptive message</span>
git commit -m <span class="string">"Create navbar and landing page hero"</span></pre>
            </div>
          </div>
          <div class="info-box"><div class="info-icon">💡</div><p><strong>Writing Good Commit Messages:</strong> Be specific! "Fix typo in pricing button" is 100x better than "updates" or "fix stuff". Future you will thank present you!</p></div>
          <div id="quiz-github-3"></div>`,
        quiz: {
          question: "What is the purpose of the staging area (git add)?",
          options: [
            "It uploads your code to GitHub servers",
            "It selects which file changes will be included in the next commit snapshot",
            "It deletes unwanted files",
            "It creates a new branch",
          ],
          correct: 1,
          explanation:
            "The <strong>staging area</strong> lets you carefully pick and choose which specific modifications to group into your next commit snapshot before sealing the commit.",
        },
      },
      {
        id: "github-4",
        title: "Push & Pull: Cloud Synchronization",
        xp: 20,
        checklist: [
          "Understand remote repositories",
          "Use git push to upload commits",
          "Use git pull to download updates",
        ],
        content: `
          <div class="lesson-section">
            <h3>Syncing Your Commits with the Cloud ☁️</h3>
            <p>Once you have committed snapshots locally, you need to sync them with GitHub so your team can see them and you have a safe cloud backup.</p>
          </div>
          <div class="lesson-section">
            <h3>Push vs Pull</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px;">
              <div class="tip-card" style="margin:0;">
                <div class="tip-icon">⬆️</div>
                <h4 style="margin-bottom:6px;">git push</h4>
                <p>Uploads your local commits from your computer up to GitHub.</p>
              </div>
              <div class="tip-card" style="margin:0;">
                <div class="tip-icon">⬇️</div>
                <h4 style="margin-bottom:6px;">git pull</h4>
                <p>Downloads new commits from GitHub onto your local computer.</p>
              </div>
            </div>
          </div>
          <div class="code-block" style="margin-top:18px;">
            <div class="code-block-header"><span class="code-lang">Common Commands</span></div>
            <pre><span class="comment"># Link local repo to a GitHub repository</span>
git remote add origin https://github.com/username/my-project.git

<span class="comment"># Push your commits to GitHub (main branch)</span>
git push -u origin main

<span class="comment"># Pull latest changes made by teammates</span>
git pull origin main</pre>
          </div>
          <div id="quiz-github-4"></div>`,
        quiz: {
          question:
            "Which command uploads your local commits to your remote GitHub repository?",
          options: ["git upload", "git sync", "git push", "git send"],
          correct: 2,
          explanation:
            "<strong>git push</strong> sends (pushes) your local commit history up to the remote repository on GitHub.",
        },
      },
      {
        id: "github-5",
        title: "Branches: Parallel Universes",
        xp: 25,
        checklist: [
          "Understand what a branch is",
          "Create a new feature branch",
          "Switch between branches and merge",
        ],
        content: `
          <div class="lesson-section">
            <h3>Working in Safe Isolation 🌿</h3>
            <p>Imagine working on a working website. You want to experiment with a crazy new feature without breaking the site for current users. In Git, you create a <strong>Branch</strong>.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Parallel Realities</div>
            <p>The <strong>main branch</strong> is the official reality (live production). Creating a feature branch is like opening a <strong>parallel universe</strong>. You can experiment, rewrite code, or test features. If it works, you merge it back into reality. If it fails, you delete the branch and reality is completely unharmed!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Branch Commands</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment"># Create and switch to a new branch</span>
git checkout -b feature-dark-mode
<span class="comment"># (or the modern syntax: git switch -c feature-dark-mode)</span>

<span class="comment"># List all branches</span>
git branch

<span class="comment"># Switch back to the main branch</span>
git checkout main

<span class="comment"># Merge your feature branch into main</span>
git merge feature-dark-mode</pre>
          </div>
          <div id="quiz-github-5"></div>`,
        quiz: {
          question:
            "What command creates a new branch and immediately switches to it?",
          options: [
            "git branch new-feature",
            "git checkout -b new-feature",
            "git switch new-feature",
            "git fork new-feature",
          ],
          correct: 1,
          explanation:
            "<strong>git checkout -b [branch-name]</strong> creates the branch and switches your working directory to it in one single step.",
        },
      },
      {
        id: "github-6",
        title: "Pull Requests & Code Review",
        xp: 25,
        checklist: [
          "Understand what a Pull Request is",
          "Learn how code reviews work",
          "Merge a PR on GitHub",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Gold Standard of Teamwork 🤝</h3>
            <p>A <strong>Pull Request (PR)</strong> is a request to merge changes from your feature branch into the main project. It is where collaboration truly happens.</p>
          </div>
          <div class="lesson-section">
            <h3>The Life of a Pull Request</h3>
            <ol style="padding-left:22px;line-height:2.2;">
              <li>You finish your feature on your branch (<code>feature-checkout</code>) and <code>git push</code> it to GitHub.</li>
              <li>On GitHub.com, you click <strong>"Compare & pull request"</strong>.</li>
              <li>You write a description explaining what you changed and why.</li>
              <li>Teammates review your code, leave feedback, and request improvements.</li>
              <li>Once approved, you click <strong>"Merge pull request"</strong>!</li>
            </ol>
          </div>
          <div class="tip-card"><div class="tip-icon">👀</div><p><strong>Code Reviews Make You Better:</strong> Having teammates read your PR helps catch bugs before they ever reach real users and teaches you new coding tricks from peers.</p></div>
          <div id="quiz-github-6"></div>`,
        quiz: {
          question: "What is a Pull Request (PR) on GitHub?",
          options: [
            "A request to download files to your computer",
            "A formal proposal to review and merge code changes from one branch into another",
            "A command that pulls code from a database",
            "An error message when code breaks",
          ],
          correct: 1,
          explanation:
            "A <strong>Pull Request</strong> lets you propose changes, discuss them with team members, perform code reviews, and run automated tests before merging into the main branch.",
        },
      },
      {
        id: "github-7",
        title: "Cloning & Remote Collaboration",
        xp: 20,
        checklist: [
          "Understand git clone",
          "Clone an open-source project",
          "Inspect commit history with git log",
        ],
        content: `
          <div class="lesson-section">
            <h3>Downloading Existing Repositories 📥</h3>
            <p>When you join a new job or want to explore an open-source library, you don't start from scratch. You <strong>clone</strong> the project to get a full local copy of its files and history.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Cloning a Project</span></div>
            <pre><span class="comment"># Copy a repository to your machine</span>
git clone https://github.com/facebook/react.git

<span class="comment"># Step inside the downloaded folder</span>
cd react

<span class="comment"># View the history of past commits</span>
git log --oneline -n 5</pre>
          </div>
          <div class="info-box"><div class="info-icon">💡</div><p><strong>git clone vs Download ZIP:</strong> Downloading a ZIP only gives you the latest files. <code>git clone</code> downloads the files <em>plus the entire Git time machine history</em>, branches, and remote links!</p></div>
          <div id="quiz-github-7"></div>`,
        quiz: {
          question:
            "What command downloads a complete copy of an existing GitHub repository including all history and branches?",
          options: ["git download", "git clone", "git pull", "git copy"],
          correct: 1,
          explanation:
            "<strong>git clone</strong> copies the entire repository, including all commits, branches, and version history, directly to your computer.",
        },
      },
      {
        id: "github-8",
        title: "Resolving Merge Conflicts",
        xp: 25,
        checklist: [
          "Learn why conflicts occur",
          "Read conflict markers (<<<<<<<)",
          "Safely resolve and commit",
        ],
        content: `
          <div class="lesson-section">
            <h3>When Two People Edit the Same Line ⚔️</h3>
            <p>A <strong>merge conflict</strong> happens when two branches modified the exact same line of code differently, and Git doesn't know which version you want to keep.</p>
          </div>
          <div class="lesson-section">
            <h3>What a Conflict Looks Like</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Code with Conflict Markers</span></div>
              <pre>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Change - Your Branch)
&lt;h1&gt;Welcome to LearnPath Tutor&lt;/h1&gt;
=======
&lt;h1&gt;Welcome to LearnPath AI Learning&lt;/h1&gt;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-title (Incoming Change - Other Branch)</pre>
            </div>
          </div>
          <div class="code-explanation">
            <h4>How to Resolve It Step-by-Step:</h4>
            <div class="code-line-explain"><span class="line-num">1</span><span class="line-desc">Open the conflicting file in your editor (VS Code highlights conflicts with buttons).</span></div>
            <div class="code-line-explain"><span class="line-num">2</span><span class="line-desc">Decide which code to keep (Current, Incoming, or a combination of both).</span></div>
            <div class="code-line-explain"><span class="line-num">3</span><span class="line-desc">Delete the conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>).</span></div>
            <div class="code-line-explain"><span class="line-num">4</span><span class="line-desc">Run <code>git add .</code> and <code>git commit -m "Resolve merge conflict in title"</code>!</span></div>
          </div>
          <div id="quiz-github-8"></div>`,
        quiz: {
          question:
            'What does the "=======" symbol represent inside a Git conflict marker?',
          options: [
            "The end of the file",
            "The dividing line between your branch changes and the incoming branch changes",
            "A syntax error in your JavaScript",
            "A successful merge",
          ],
          correct: 1,
          explanation:
            "<strong>=======</strong> is the separator dividing your current branch's version (above) from the incoming branch's version (below).",
        },
      },
      {
        id: "github-9",
        title: ".gitignore & Protecting Secrets",
        xp: 20,
        checklist: [
          "Create a .gitignore file",
          "Ignore node_modules and .env",
          "Never commit private API keys",
        ],
        content: `
          <div class="lesson-section">
            <h3>Keeping Sensitive Files Private 🛡️</h3>
            <p>Not every file belongs on GitHub. Large build folders (like <code>node_modules</code>) and sensitive credentials (passwords, database URLs, Stripe keys in <code>.env</code>) must NEVER be uploaded.</p>
          </div>
          <div class="lesson-section">
            <h3>The .gitignore File</h3>
            <p>Create a file named exactly <code>.gitignore</code> in your project root and list files or patterns you want Git to ignore:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">.gitignore</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
              <pre><span class="comment"># Dependencies (heavy folders)</span>
node_modules/

<span class="comment"># Environment variables & secrets (NEVER COMMIT!)</span>
.env
.env.local

<span class="comment"># Build outputs</span>
dist/
.next/

<span class="comment"># Operating system files</span>
.DS_Store
Thumbs.db</pre>
            </div>
          </div>
          <div class="warning-card"><div class="warn-icon">⚠️</div><p><strong>Crucial Rule:</strong> If you accidentally commit an API key to a public GitHub repo, automated bots can find and abuse it within seconds. Always add <code>.env</code> to your <code>.gitignore</code> first!</p></div>
          <div id="quiz-github-9"></div>`,
        quiz: {
          question: "Why should the .env file be listed in your .gitignore?",
          options: [
            "Because it makes the website load slower",
            "Because it contains private secrets, database passwords, and API keys that should never be public",
            "Because Git cannot read text files",
            "Because GitHub does not allow files with dots",
          ],
          correct: 1,
          explanation:
            "The <strong>.env file</strong> holds confidential API tokens and passwords. Adding it to <code>.gitignore</code> prevents it from ever being accidentally pushed to public GitHub servers.",
        },
      },
      {
        id: "github-10",
        title: "Milestone Project & Multi-Quiz: Git Workflow",
        xp: 40,
        checklist: [
          "Review core Git commands",
          "Understand the full development lifecycle",
          "Pass the 4-question Git Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 2 Capstone: The Professional Git Workflow 🏆</h3>
            <p>You now master the exact version control workflow used by software engineers at Google, Meta, and startups worldwide: creating repositories, staging, committing, branching, collaborating through PRs, and resolving conflicts.</p>
          </div>
          <div class="success-card">
            <div class="suc-icon">🐙</div>
            <p><strong>Milestone Challenge:</strong> Test your mastery with this 4-question quiz to earn the Git & GitHub Mastery Badge!</p>
          </div>
          <div id="multi-quiz-github-10"></div>`,
        quizzes: [
          {
            question:
              "What is the correct sequence of commands to record changes in Git and upload them to GitHub?",
            options: [
              "git push → git add → git commit",
              "git add → git commit → git push",
              "git commit → git push → git add",
              "git init → git pull → git add",
            ],
            correct: 1,
            explanation:
              'First stage files with <code>git add</code>, seal the snapshot with <code>git commit -m "..."</code>, then upload with <code>git push</code>.',
          },
          {
            question: "What is the primary benefit of creating a Git branch?",
            options: [
              "It compresses files to save disk space",
              "It lets you build features in isolation without affecting the stable main code",
              "It automatically deploys your site to GitHub Pages",
              "It converts JavaScript into TypeScript",
            ],
            correct: 1,
            explanation:
              "Branches let you develop new features, experiments, and bugfixes in complete isolation without risking the stable main codebase.",
          },
          {
            question:
              "What should you do immediately if you discover a merge conflict while merging branches?",
            options: [
              "Delete the entire project folder and start over",
              "Open the affected files, choose the correct code, remove conflict markers, stage and commit",
              "Run git push --force",
              "Turn off your computer",
            ],
            correct: 1,
            explanation:
              "Conflicts are a normal part of collaboration. Simply open the file, select the right code, delete markers, stage, and commit.",
          },
          {
            question:
              "Which file tells Git to skip uploading sensitive credentials and heavy dependencies?",
            options: ["README.md", "package.json", ".gitignore", "index.html"],
            correct: 2,
            explanation:
              "<strong>.gitignore</strong> lists all files, folders, and patterns that Git should disregard and never track.",
          },
        ],
      },
    ],
  },
  {
    id: "html",
    name: "HTML",
    emoji: "🌐",
    color: "#b45309",
    gradient: "linear-gradient(135deg, #e44d26, #f16529)",
    description:
      "Learn the foundational markup language that structures every website on Earth",
    lessons: [
      {
        id: "html-1",
        title: "What is HTML?",
        xp: 10,
        checklist: [
          "Understand HTML's role as the skeleton of the web",
          "Learn opening and closing tags",
          "Run code in the live editor",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Skeleton of Every Webpage 🦴</h3>
            <p>Every website you have ever visited — from Google and YouTube to small personal blogs — is built on <strong>HTML</strong> (HyperText Markup Language).</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: A Human Body</div>
            <p>If a website were a person:<br>
            • <strong>HTML</strong> is the <strong>skeleton</strong> (bones, ribs, organs giving structure).<br>
            • <strong>CSS</strong> is the <strong>skin, clothes, hair, and style</strong> (how it looks).<br>
            • <strong>JavaScript</strong> is the <strong>muscles and brain</strong> (how it moves and reacts).</p>
          </div>
          <div class="lesson-section">
            <h3>Try It Right Now! 💻</h3>
            <p>Edit the text below and click <strong>"▶ Run"</strong> to see your changes instantly:</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-1','preview-html-1')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-1" rows="10">&lt;h1&gt;Hello, World! 🌍&lt;/h1&gt;
&lt;p&gt;I am learning HTML with my personal tutor!&lt;/p&gt;
&lt;button&gt;Click Me!&lt;/button&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-1"></iframe>
          </div>
          <div class="code-explanation">
            <h4>How Tags Work:</h4>
            <div class="code-line-explain"><span class="line-num">&lt;h1&gt;</span><span class="line-desc"><strong>Opening tag</strong> — tells the browser "start a top-level heading here".</span></div>
            <div class="code-line-explain"><span class="line-num">Hello, World!</span><span class="line-desc"><strong>Content</strong> — the text displayed to visitors.</span></div>
            <div class="code-line-explain"><span class="line-num">&lt;/h1&gt;</span><span class="line-desc"><strong>Closing tag</strong> — the forward slash <code>/</code> signals the end of the heading.</span></div>
          </div>
          <div id="quiz-html-1"></div>`,
        quiz: {
          question: "What character indicates a closing tag in HTML?",
          options: [
            "Backslash (\\)",
            "Forward slash (/)",
            "Exclamation mark (!)",
            "Asterisk (*)",
          ],
          correct: 1,
          explanation:
            "In HTML, closing tags always include a <strong>forward slash (/)</strong> immediately after the opening angle bracket (e.g. <code>&lt;/p&gt;</code> or <code>&lt;/h1&gt;</code>).",
        },
      },
      {
        id: "html-2",
        title: "Headings, Paragraphs & Text Formatting",
        xp: 15,
        checklist: [
          "Use h1 through h6 headings",
          "Write paragraphs and line breaks",
          "Bold and italicize words",
        ],
        content: `
          <div class="lesson-section">
            <h3>Organizing Content Hierarchy 📑</h3>
            <p>Headings communicate importance. HTML offers six levels of headings from <code>&lt;h1&gt;</code> (the main title) down to <code>&lt;h6&gt;</code> (smallest sub-heading).</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-2','preview-html-2')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-2" rows="14">&lt;h1&gt;Chapter 1: The Journey Begins&lt;/h1&gt;
&lt;h2&gt;Section A: Setting up the Camp&lt;/h2&gt;
&lt;p&gt;This is a normal paragraph with &lt;strong&gt;bold text&lt;/strong&gt; for emphasis and &lt;em&gt;italic text&lt;/em&gt; for style.&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;You can create line breaks&lt;br&gt;without starting a brand new paragraph!&lt;/p&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-2"></iframe>
          </div>
          <div class="tip-card"><div class="tip-icon">SEO</div><p><strong>Golden Rule of SEO:</strong> Always use only <strong>one</strong> <code>&lt;h1&gt;</code> tag per page for the main title. Use <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> for sub-sections. This helps search engines understand your page structure.</p></div>
          <div id="quiz-html-2"></div>`,
        quiz: {
          question:
            "Which tag represents the highest and most important heading level in HTML?",
          options: ["<h6>", "<header>", "<h1>", "<head>"],
          correct: 2,
          explanation:
            "<strong>&lt;h1&gt;</strong> represents the top-level heading. Headings decrease in size and structural hierarchy from h1 down to h6.",
        },
      },
      {
        id: "html-3",
        title: "Links & Images: Connecting the Web",
        xp: 20,
        checklist: [
          "Create hyperlinks with a href",
          'Open links in new tabs with target="_blank"',
          "Embed images with src and alt attributes",
        ],
        content: `
          <div class="lesson-section">
            <h3>Hyperlinks: The "Hyper" in HTML 🔗</h3>
            <p>Links connect pages together across the entire worldwide web using the anchor <code>&lt;a&gt;</code> tag and the <code>href</code> attribute.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-3','preview-html-3')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-3" rows="14">&lt;h2&gt;Explore My Favorite Resources&lt;/h2&gt;
&lt;p&gt;Visit &lt;a href="https://wikipedia.org" target="_blank"&gt;Wikipedia&lt;/a&gt; to learn anything!&lt;/p&gt;

&lt;h3&gt;My Pet Owl 🦉&lt;/h3&gt;
&lt;img src="https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?w=350" alt="Cute owl sitting on a branch" width="300" style="border-radius:12px;"&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-3"></iframe>
          </div>
          <div class="warning-card"><div class="warn-icon">♿</div><p><strong>The alt attribute is mandatory:</strong> Always provide descriptive <code>alt</code> text on images! If an image fails to load, or if a visually impaired user uses a screen reader, the <code>alt</code> text is what they hear.</p></div>
          <div id="quiz-html-3"></div>`,
        quiz: {
          question:
            "Which attribute specifies the image file URL in an <img> tag?",
          options: ["href", "url", "link", "src"],
          correct: 3,
          explanation:
            "The <strong>src</strong> (source) attribute specifies the location/URL of the image file. (Note: <code>href</code> is used for links, not images!).",
        },
      },
      {
        id: "html-4",
        title: "Lists: Ordered & Unordered",
        xp: 15,
        checklist: [
          "Create bulleted lists with ul",
          "Create numbered lists with ol",
          "Nest lists inside one another",
        ],
        content: `
          <div class="lesson-section">
            <h3>Organizing Items with Lists 📋</h3>
            <p>Lists are used everywhere: recipe ingredients, feature lists, and navigation menus are almost always built with HTML lists.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-4','preview-html-4')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-4" rows="16">&lt;h3&gt;Grocery List (Unordered / Bulleted)&lt;/h3&gt;
&lt;ul&gt;
  &lt;li&gt;Fresh apples 🍎&lt;/li&gt;
  &lt;li&gt;Almond milk 🥛&lt;/li&gt;
  &lt;li&gt;Dark chocolate 🍫&lt;/li&gt;
&lt;/ul&gt;

&lt;h3&gt;Morning Routine (Ordered / Numbered)&lt;/h3&gt;
&lt;ol&gt;
  &lt;li&gt;Wake up and stretch&lt;/li&gt;
  &lt;li&gt;Drink a glass of water&lt;/li&gt;
  &lt;li&gt;Code for 30 minutes! 🚀&lt;/li&gt;
&lt;/ol&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-4"></iframe>
          </div>
          <div id="quiz-html-4"></div>`,
        quiz: {
          question: "Which tag creates a numbered (ordered) list in HTML?",
          options: ["<ul>", "<ol>", "<nl>", "<list>"],
          correct: 1,
          explanation:
            '<strong>&lt;ol&gt;</strong> stands for "Ordered List" and renders numbered items (1, 2, 3). <code>&lt;ul&gt;</code> stands for "Unordered List" and renders bullet points.',
        },
      },
      {
        id: "html-5",
        title: "Forms, Inputs & Buttons",
        xp: 25,
        checklist: [
          "Create interactive forms",
          "Use text, email, password, and checkbox inputs",
          "Link labels to inputs using for and id",
        ],
        content: `
          <div class="lesson-section">
            <h3>Collecting User Information 📝</h3>
            <p>Forms allow visitors to sign up, log in, send contact messages, and submit orders. The <code>&lt;form&gt;</code> element bundles input controls together.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-5','preview-html-5')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-5" rows="20">&lt;form onsubmit="alert('Form submitted!'); return false;" style="font-family:sans-serif;"&gt;
  &lt;div style="margin-bottom:12px;"&gt;
    &lt;label for="uname"&gt;Full Name:&lt;/label&gt;&lt;br&gt;
    &lt;input type="text" id="uname" placeholder="e.g. Alex Smith" required style="padding:6px;width:240px;"&gt;
  &lt;/div&gt;

  &lt;div style="margin-bottom:12px;"&gt;
    &lt;label for="uemail"&gt;Email Address:&lt;/label&gt;&lt;br&gt;
    &lt;input type="email" id="uemail" placeholder="alex@example.com" required style="padding:6px;width:240px;"&gt;
  &lt;/div&gt;

  &lt;div style="margin-bottom:12px;"&gt;
    &lt;input type="checkbox" id="newsletter"&gt;
    &lt;label for="newsletter"&gt;Subscribe to weekly coding tips&lt;/label&gt;
  &lt;/div&gt;

  &lt;button type="submit" style="padding:8px 18px;background:#7c3aed;color:white;border:none;border-radius:6px;cursor:pointer;"&gt;Create Account&lt;/button&gt;
&lt;/form&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-5"></iframe>
          </div>
          <div class="tip-card"><div class="tip-icon">💡</div><p><strong>The for / id connection:</strong> When you click on the text inside a <code>&lt;label for="uname"&gt;</code>, the browser automatically focuses the input whose <code>id="uname"</code> matches! This makes checkboxes and inputs vastly easier to click.</p></div>
          <div id="quiz-html-5"></div>`,
        quiz: {
          question:
            "Which input type should you use to hide password characters with dots or stars as the user types?",
          options: [
            'type="secret"',
            'type="password"',
            'type="hidden"',
            'type="protected"',
          ],
          correct: 1,
          explanation:
            '<strong>type="password"</strong> automatically masks the typed characters with dots or asterisks for privacy and security.',
        },
      },
      {
        id: "html-6",
        title: "Tables & Structured Data",
        xp: 20,
        checklist: [
          "Create tables with table, tr, th, td",
          "Style borders and cell padding",
          "Use tables for tabular data",
        ],
        content: `
          <div class="lesson-section">
            <h3>Displaying Grids of Data 📊</h3>
            <p>Tables are designed specifically to display structured tabular information (like timetables, pricing charts, or spreadsheets).</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-6','preview-html-6')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-6" rows="18">&lt;table border="1" cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;"&gt;
  &lt;thead style="background:#f5f3ff;"&gt;
    &lt;tr&gt;
      &lt;th&gt;Plan&lt;/th&gt;
      &lt;th&gt;Storage&lt;/th&gt;
      &lt;th&gt;Price&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Free Explorer&lt;/td&gt;
      &lt;td&gt;5 GB&lt;/td&gt;
      &lt;td&gt;$0 / mo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Pro Builder&lt;/td&gt;
      &lt;td&gt;100 GB&lt;/td&gt;
      &lt;td&gt;$12 / mo&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-6"></iframe>
          </div>
          <div class="code-explanation">
            <h4>Table Anatomy:</h4>
            <div class="code-line-explain"><span class="line-num">&lt;tr&gt;</span><span class="line-desc"><strong>Table Row:</strong> A horizontal row of data.</span></div>
            <div class="code-line-explain"><span class="line-num">&lt;th&gt;</span><span class="line-desc"><strong>Table Header:</strong> Bold, centered header cell describing the column.</span></div>
            <div class="code-line-explain"><span class="line-num">&lt;td&gt;</span><span class="line-desc"><strong>Table Data:</strong> Standard content cell inside a row.</span></div>
          </div>
          <div id="quiz-html-6"></div>`,
        quiz: {
          question:
            "Which tag defines an individual data cell inside a table row?",
          options: ["<th>", "<td>", "<tc>", "<cell>"],
          correct: 1,
          explanation:
            '<strong>&lt;td&gt;</strong> stands for "Table Data" and defines a standard cell within a table row (<code>&lt;tr&gt;</code>).',
        },
      },
      {
        id: "html-7",
        title: "Semantic HTML & Accessibility",
        xp: 25,
        checklist: [
          "Replace generic divs with semantic tags",
          "Use header, nav, main, article, footer",
          "Understand screen reader benefits",
        ],
        content: `
          <div class="lesson-section">
            <h3>Code with Meaning 🧠</h3>
            <p>In early web days, developers wrote <code>&lt;div&gt;</code> for everything. <strong>Semantic HTML</strong> means using tags that clearly explain what the content inside them actually IS.</p>
          </div>
          <div class="lesson-section">
            <h3>Semantic Layout Elements</h3>
            <ul>
              <li>🧭 <code>&lt;nav&gt;</code> — Contains major site navigation links.</li>
              <li>🎩 <code>&lt;header&gt;</code> — Introductory content, logo, and top bar.</li>
              <li>🏛️ <code>&lt;main&gt;</code> — The primary central content of the document.</li>
              <li>📰 <code>&lt;article&gt;</code> — A self-contained piece of content (like a blog post or news item).</li>
              <li>📑 <code>&lt;section&gt;</code> — A themed grouping of content with its own heading.</li>
              <li>👣 <code>&lt;footer&gt;</code> — Copyright notices, contact info, and legal links at the bottom.</li>
            </ul>
          </div>
          <div class="success-card"><div class="suc-icon">🌟</div><p><strong>Why Semantics Matter:</strong> Search engines like Google rank semantic websites higher because they can parse your articles and navigation with clarity. Blind users with screen readers can jump directly to <code>&lt;main&gt;</code> or skip navigation with ease.</p></div>
          <div id="quiz-html-7"></div>`,
        quiz: {
          question:
            "Which semantic element should contain the primary navigational links of a website?",
          options: ["<menu>", "<nav>", "<links>", "<navigate>"],
          correct: 1,
          explanation:
            "The <strong>&lt;nav&gt;</strong> element is specifically intended for blocks of primary navigation links.",
        },
      },
      {
        id: "html-8",
        title: "HTML5 Media & Modern Elements",
        xp: 20,
        checklist: [
          "Embed video and audio natively",
          "Use details and summary for accordions",
          "Use the progress element",
        ],
        content: `
          <div class="lesson-section">
            <h3>Native Multimedia Without Plugins 🎬</h3>
            <p>HTML5 introduced native multimedia elements that play audio and video directly in modern browsers without needing Flash or third-party players.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-8','preview-html-8')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-8" rows="18">&lt;div style="font-family:sans-serif;"&gt;
  &lt;h3&gt;Interactive Accordion (No JavaScript needed!)&lt;/h3&gt;
  &lt;details style="background:#f5f3ff;padding:12px;border-radius:8px;margin-bottom:12px;cursor:pointer;"&gt;
    &lt;summary style="font-weight:bold;"&gt;Click to expand FAQ: Is HTML hard to learn?&lt;/summary&gt;
    &lt;p style="margin-top:8px;color:#555;"&gt;Not at all! HTML is the most beginner-friendly language on the web. You can build real pages on day one!&lt;/p&gt;
  &lt;/details&gt;

  &lt;h3&gt;Progress Bar&lt;/h3&gt;
  &lt;label for="pbar"&gt;Course Completion: 75%&lt;/label&gt;&lt;br&gt;
  &lt;progress id="pbar" value="75" max="100" style="width:100%;height:20px;"&gt;&lt;/progress&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-8"></iframe>
          </div>
          <div id="quiz-html-8"></div>`,
        quiz: {
          question:
            "Which pair of HTML5 elements creates a native expandable/collapsible toggle box with ZERO JavaScript?",
          options: [
            "<toggle> and <content>",
            "<collapse> and <expand>",
            "<details> and <summary>",
            "<accordion> and <tab>",
          ],
          correct: 2,
          explanation:
            "The <strong>&lt;details&gt;</strong> and <strong>&lt;summary&gt;</strong> elements create a native dropdown widget that expands and collapses automatically on click.",
        },
      },
      {
        id: "html-9",
        title: "Milestone Project & Multi-Quiz: Developer Profile Card",
        xp: 40,
        checklist: [
          "Combine headings, images, lists, and links",
          "Write clean semantic markup",
          "Pass the 4-question HTML Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 3 Capstone: The Complete Profile Card 🏆</h3>
            <p>You have mastered HTML! You know how to structure pages, embed links and images, build forms, present tabular data, and use semantic tags.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-html-9','preview-html-9')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-html-9" rows="22">&lt;article style="max-width:320px;border:1px solid #e5e7eb;border-radius:16px;padding:20px;text-align:center;font-family:sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.08);"&gt;
  &lt;img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Sarah Connor portrait" width="100" height="100" style="border-radius:50%;object-fit:cover;"&gt;
  &lt;h2 style="margin:12px 0 4px;"&gt;Sarah Connor&lt;/h2&gt;
  &lt;p style="color:#6b7280;margin:0 0 14px;font-size:0.9rem;"&gt;Full-Stack Web Developer&lt;/p&gt;
  &lt;p style="font-size:0.88rem;line-height:1.5;"&gt;Passionate about clean code, user-centered design, and building scalable apps.&lt;/p&gt;
  &lt;div style="margin-top:16px;"&gt;
    &lt;a href="#" style="display:inline-block;background:#7c3aed;color:white;padding:8px 18px;border-radius:100px;text-decoration:none;font-size:0.85rem;font-weight:bold;"&gt;Connect on GitHub&lt;/a&gt;
  &lt;/div&gt;
&lt;/article&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-html-9"></iframe>
          </div>
          <div class="success-card">
            <div class="suc-icon">🌐</div>
            <p><strong>Milestone Challenge:</strong> Complete the 4-question HTML Quiz below to prove your markup mastery!</p>
          </div>
          <div id="multi-quiz-html-9"></div>`,
        quizzes: [
          {
            question: "What is the primary role of HTML in web development?",
            options: [
              "Adding visual animations and responsive styling",
              "Structuring and organizing the content of a webpage",
              "Running backend database queries",
              "Encrypting internet traffic",
            ],
            correct: 1,
            explanation:
              "HTML defines the structure, hierarchy, and meaning of all content elements on a webpage.",
          },
          {
            question:
              "Which HTML element should you use to enclose the main body content of a page, excluding headers and footers?",
            options: ["<section>", "<main>", "<center>", "<content>"],
            correct: 1,
            explanation:
              "The <strong>&lt;main&gt;</strong> element represents the dominant content of the document body.",
          },
          {
            question: 'Why is the "alt" attribute on an <img> tag essential?',
            options: [
              "It changes the color of the image",
              "It describes the image for screen readers and displays fallback text if the image fails to load",
              "It makes images load twice as fast",
              "It allows users to download the image",
            ],
            correct: 1,
            explanation:
              "<code>alt</code> text provides accessibility for visually impaired users and displays descriptive text if image loading fails.",
          },
          {
            question:
              "Which tag should you use to create a clickable button inside a form?",
            options: [
              '<button type="submit">',
              "<click>",
              '<input type="press">',
              '<link role="button">',
            ],
            correct: 0,
            explanation:
              '<strong>&lt;button type="submit"&gt;</strong> creates a clickable button that triggers form submission.',
          },
        ],
      },
    ],
  },
  {
    id: "css",
    name: "CSS",
    emoji: "🎨",
    color: "#0369a1",
    gradient: "linear-gradient(135deg, #264de4, #2965f1)",
    description:
      "Style, animate, and layout gorgeous, responsive web applications",
    lessons: [
      {
        id: "css-1",
        title: "What is CSS?",
        xp: 10,
        checklist: [
          "Understand CSS syntax and rules",
          "Learn selectors, properties, and values",
          "Experiment in the live editor",
        ],
        content: `
          <div class="lesson-section">
            <h3>Styling the Web 🎨</h3>
            <p><strong>CSS</strong> (Cascading Style Sheets) controls how HTML looks. Colors, fonts, spacing, layouts, and animations are all created with CSS!</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: Interior Decorating</div>
            <p>If HTML is the <strong>bare drywall and studs</strong> of an unfinished house, CSS is the <strong>paint, wallpaper, hardwood floors, elegant lighting, and furniture arrangement</strong> that turns it into a warm home.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-1','preview-css-1')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-1" rows="18">&lt;style&gt;
  h1 {
    color: #7c3aed;
    font-size: 28px;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
  p {
    color: #4b5563;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
  }
  .card {
    background: #f5f3ff;
    border: 2px solid #ddd6fe;
    border-radius: 12px;
    padding: 24px;
    max-width: 320px;
    margin: 20px auto;
  }
&lt;/style&gt;
&lt;div class="card"&gt;
  &lt;h1&gt;Styled with CSS!&lt;/h1&gt;
  &lt;p&gt;Change the colors and border radius in the editor above and hit Run!&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-1"></iframe>
          </div>
          <div class="code-explanation">
            <h4>Anatomy of a CSS Rule:</h4>
            <div class="code-line-explain"><span class="line-num">h1</span><span class="line-desc"><strong>Selector:</strong> Specifies which HTML element(s) to style.</span></div>
            <div class="code-line-explain"><span class="line-num">color:</span><span class="line-desc"><strong>Property:</strong> What visual aspect you want to change.</span></div>
            <div class="code-line-explain"><span class="line-num">#7c3aed;</span><span class="line-desc"><strong>Value:</strong> The setting you want to apply (always ends with a semicolon!).</span></div>
          </div>
          <div id="quiz-css-1"></div>`,
        quiz: {
          question:
            "In CSS syntax, what character must end every property declaration?",
          options: ["Colon (:)", "Semicolon (;)", "Comma (,)", "Period (.)"],
          correct: 1,
          explanation:
            "In CSS, every property-value declaration MUST end with a <strong>semicolon (;)</strong> so the browser knows where the next property begins.",
        },
      },
      {
        id: "css-2",
        title: "Colors, Backgrounds & Typography",
        xp: 15,
        checklist: [
          "Use Hex, RGB, and HSL colors",
          "Create linear gradient backgrounds",
          "Style fonts, font-size, and line-height",
        ],
        content: `
          <div class="lesson-section">
            <h3>Visual Aesthetics: Color & Type 🌈</h3>
            <p>Colors and typography evoke mood, trust, and professionalism. CSS gives you immense precision over both.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-2','preview-css-2')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-2" rows="18">&lt;style&gt;
  .hero-box {
    /* Gorgeous gradient background */
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    padding: 30px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(124,58,237,0.3);
    font-family: 'Inter', system-ui, sans-serif;
  }
  .hero-box h2 {
    font-size: 26px;
    letter-spacing: -0.5px;
    margin-bottom: 8px;
  }
  .hero-box p {
    font-size: 15px;
    opacity: 0.9;
    line-height: 1.5;
  }
&lt;/style&gt;
&lt;div class="hero-box"&gt;
  &lt;h2&gt;Design That Inspires&lt;/h2&gt;
  &lt;p&gt;Gradient backgrounds make cards pop and look high-end instantly!&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-2"></iframe>
          </div>
          <div id="quiz-css-2"></div>`,
        quiz: {
          question:
            "Which CSS function creates a smooth color transition between two or more angles?",
          options: [
            "color-shift()",
            "linear-gradient()",
            "color-transition()",
            "gradient-mesh()",
          ],
          correct: 1,
          explanation:
            "<strong>linear-gradient()</strong> generates a transition between two or more colors along a straight line angle.",
        },
      },
      {
        id: "css-3",
        title: "The Box Model: Spacing Everything",
        xp: 20,
        checklist: [
          "Understand margin vs padding vs border",
          "Learn how to use box-sizing: border-box",
          "Inspect spacing in the live editor",
        ],
        content: `
          <div class="lesson-section">
            <h3>Every Element is a Rectangular Box 📦</h3>
            <p>Understanding the <strong>Box Model</strong> is the single most important milestone in learning CSS layout.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: A Framed Picture</div>
            <p>• <strong>Content:</strong> The photograph itself.<br>
            • <strong>Padding:</strong> The white mat border inside the frame.<br>
            • <strong>Border:</strong> The wooden frame around the photo.<br>
            • <strong>Margin:</strong> The empty wall space between this frame and the next frame hanging on the wall!</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-3','preview-css-3')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-3" rows="18">&lt;style&gt;
  .box {
    background: #ede9fe;
    /* Space INSIDE between text and border */
    padding: 24px;
    /* The visible boundary */
    border: 3px solid #7c3aed;
    border-radius: 12px;
    /* Space OUTSIDE between this box and other elements */
    margin: 20px;
    font-family: sans-serif;
  }
&lt;/style&gt;
&lt;div class="box"&gt;
  &lt;strong&gt;I am inside the box!&lt;/strong&gt;
  &lt;p style="margin-top:8px;"&gt;Padding gives me breathing room inside; margin pushes neighboring boxes away outside.&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-3"></iframe>
          </div>
          <div class="tip-card"><div class="tip-icon">⭐</div><p><strong>Pro Developer Tip:</strong> Always set <code>box-sizing: border-box;</code> in your global CSS. This ensures that adding padding or borders doesn't unexpectedly expand the element's total width!</p></div>
          <div id="quiz-css-3"></div>`,
        quiz: {
          question:
            "What property creates empty space INSIDE an element, between its content and its border?",
          options: ["margin", "padding", "border-spacing", "outline"],
          correct: 1,
          explanation:
            "<strong>padding</strong> creates breathing room inside the element. <strong>margin</strong> pushes space outside.",
        },
      },
      {
        id: "css-4",
        title: "Flexbox: 1D Layout Powerhouse",
        xp: 25,
        checklist: [
          "Activate flexbox with display: flex",
          "Align horizontally with justify-content",
          "Align vertically with align-items and gap",
        ],
        content: `
          <div class="lesson-section">
            <h3>Align Anything in Seconds with Flexbox 💪</h3>
            <p>Before Flexbox, centering an element in CSS was notoriously painful. Flexbox makes horizontal and vertical alignment intuitive and effortless.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-4','preview-css-4')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-4" rows="22">&lt;style&gt;
  .nav-container {
    display: flex;
    justify-content: space-between; <span class="comment">/* pushes items to opposite sides */</span>
    align-items: center;            <span class="comment">/* perfectly centers vertically */</span>
    background: #1e1b4b;
    padding: 14px 20px;
    border-radius: 12px;
    color: white;
    font-family: sans-serif;
  }
  .nav-links {
    display: flex;
    gap: 16px; <span class="comment">/* clean space between links */</span>
  }
  .nav-links span {
    cursor: pointer;
    font-size: 14px;
    opacity: 0.85;
  }
&lt;/style&gt;
&lt;div class="nav-container"&gt;
  &lt;strong&gt;LearnPath 🦉&lt;/strong&gt;
  &lt;div class="nav-links"&gt;
    &lt;span&gt;Courses&lt;/span&gt;
    &lt;span&gt;Quizzes&lt;/span&gt;
    &lt;span&gt;Profile&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-4"></iframe>
          </div>
          <div class="code-explanation">
            <h4>The Essential Flexbox Trio:</h4>
            <div class="code-line-explain"><span class="line-num">display: flex</span><span class="line-desc">Turns the container into a flexible parent.</span></div>
            <div class="code-line-explain"><span class="line-num">justify-content</span><span class="line-desc">Controls alignment along the main axis (center, space-between, space-around).</span></div>
            <div class="code-line-explain"><span class="line-num">align-items</span><span class="line-desc">Controls cross-axis alignment (center, flex-start, stretch).</span></div>
          </div>
          <div id="quiz-css-4"></div>`,
        quiz: {
          question:
            "Which justify-content value distributes items evenly so that the first item touches the start and the last item touches the end?",
          options: ["space-around", "space-between", "center", "space-evenly"],
          correct: 1,
          explanation:
            "<strong>space-between</strong> places the first item at the left edge, the last item at the right edge, and distributes the remaining space equally in between.",
        },
      },
      {
        id: "css-5",
        title: "CSS Grid: 2D Layout Mastery",
        xp: 25,
        checklist: [
          "Activate CSS Grid with display: grid",
          "Define columns with grid-template-columns",
          "Span items across multiple columns",
        ],
        content: `
          <div class="lesson-section">
            <h3>Two-Dimensional Layouts 📐</h3>
            <p>While Flexbox is designed for 1-dimensional layouts (a single row OR a single column), <strong>CSS Grid</strong> handles rows AND columns at the exact same time.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-5','preview-css-5')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-5" rows="22">&lt;style&gt;
  .grid-gallery {
    display: grid;
    /* 3 equal columns that automatically scale */
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    font-family: sans-serif;
  }
  .grid-card {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: #166534;
  }
  .featured {
    /* Spans across 2 columns! */
    grid-column: span 2;
    background: #dcfce7;
  }
&lt;/style&gt;
&lt;div class="grid-gallery"&gt;
  &lt;div class="grid-card featured"&gt;Featured Card (Spans 2)&lt;/div&gt;
  &lt;div class="grid-card"&gt;Card 2&lt;/div&gt;
  &lt;div class="grid-card"&gt;Card 3&lt;/div&gt;
  &lt;div class="grid-card"&gt;Card 4&lt;/div&gt;
  &lt;div class="grid-card"&gt;Card 5&lt;/div&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-5"></iframe>
          </div>
          <div id="quiz-css-5"></div>`,
        quiz: {
          question:
            "What unit in CSS Grid represents a fraction of the available free space?",
          options: ["px", "fr", "%", "em"],
          correct: 1,
          explanation:
            "The <strong>fr</strong> (fraction) unit represents a fraction of the available space inside the grid container (e.g. <code>1fr 2fr 1fr</code>).",
        },
      },
      {
        id: "css-6",
        title: "Positioning & Z-Index Layering",
        xp: 20,
        checklist: [
          "Understand static, relative, and absolute",
          "Use fixed and sticky positioning",
          "Control stacking layers with z-index",
        ],
        content: `
          <div class="lesson-section">
            <h3>Controlling Exact Placements 📍</h3>
            <p>Normally elements flow one after another down the page. The <code>position</code> property lets you break elements out of normal document flow.</p>
          </div>
          <div class="lesson-section">
            <h3>The 5 Positioning Modes:</h3>
            <ul>
              <li><strong>static:</strong> Default flow. Top, left, right, bottom have no effect.</li>
              <li><strong>relative:</strong> Positioned relative to where it normally would be.</li>
              <li><strong>absolute:</strong> Positioned relative to its nearest positioned ancestor.</li>
              <li><strong>fixed:</strong> Stays glued to the screen viewport even when scrolling (like our top navbar!).</li>
              <li><strong>sticky:</strong> Scrolls with the page until it hits a threshold, then sticks in place.</li>
            </ul>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-6','preview-css-6')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-6" rows="18">&lt;style&gt;
  .parent-card {
    position: relative; <span class="comment">/* Anchor for absolute children */</span>
    background: #fdf2f8;
    border: 2px solid #fbcfe8;
    border-radius: 14px;
    padding: 30px;
    font-family: sans-serif;
  }
  .badge {
    position: absolute;
    top: -10px;
    right: 16px;
    background: #ec4899;
    color: white;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: bold;
  }
&lt;/style&gt;
&lt;div class="parent-card"&gt;
  &lt;div class="badge"&gt;POPULAR 🔥&lt;/div&gt;
  &lt;h3 style="margin:0 0 6px;"&gt;Premium Plan&lt;/h3&gt;
  &lt;p style="color:#6b7280;margin:0;"&gt;Notice how the badge floats right on the top-right corner!&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-6"></iframe>
          </div>
          <div id="quiz-css-6"></div>`,
        quiz: {
          question:
            "For an element with position: absolute to position itself within its parent box, what position value must that parent have?",
          options: [
            "position: static",
            "position: relative (or any non-static value)",
            "position: initial",
            "position: fixed only",
          ],
          correct: 1,
          explanation:
            "An absolutely positioned element positions itself relative to its nearest ancestor that has a position other than static (most commonly <code>position: relative</code>).",
        },
      },
      {
        id: "css-7",
        title: "Transitions & Keyframe Animations",
        xp: 25,
        checklist: [
          "Animate hover states with transition",
          "Use transform: scale and rotate",
          "Create looping @keyframes animations",
        ],
        content: `
          <div class="lesson-section">
            <h3>Breathing Life with Motion ✨</h3>
            <p>Smooth animations turn a dull website into a delightful, modern experience. CSS handles micro-interactions and continuous animations with zero JavaScript.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-7','preview-css-7')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-7" rows="22">&lt;style&gt;
  .glow-btn {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    padding: 14px 28px;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(124,58,237,0.3);
    /* Smooth transitions for all properties */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .glow-btn:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 10px 25px rgba(236,72,153,0.5);
  }
  .pulse-dot {
    display: inline-block;
    width: 12px; height: 12px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 1.5s infinite;
  }
  @keyframes pulse {
    0% { transform: scale(0.9); opacity: 0.7; }
    50% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0.7; }
  }
&lt;/style&gt;
&lt;div style="text-align:center;padding:30px;font-family:sans-serif;"&gt;
  &lt;p&gt;&lt;span class="pulse-dot"&gt;&lt;/span&gt; Live status dot with @keyframes&lt;/p&gt;
  &lt;button class="glow-btn"&gt;Hover Over Me! 🚀&lt;/button&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-7"></iframe>
          </div>
          <div id="quiz-css-7"></div>`,
        quiz: {
          question:
            "Which CSS rule defines reusable multi-step animation sequences?",
          options: [
            "@animation",
            "@keyframes",
            "@transition",
            "@keyframes-rule",
          ],
          correct: 1,
          explanation:
            "The <strong>@keyframes</strong> at-rule lets developers define the intermediate steps (0%, 50%, 100%) of a CSS animation sequence.",
        },
      },
      {
        id: "css-8",
        title: "Responsive Design & Media Queries",
        xp: 25,
        checklist: [
          "Understand mobile-first philosophy",
          "Write media queries for smartphones and tablets",
          "Use the viewport meta tag",
        ],
        content: `
          <div class="lesson-section">
            <h3>Looking Great on Any Screen Size 📱💻</h3>
            <p>Over 60% of web traffic comes from smartphones. <strong>Responsive Web Design</strong> ensures your pages gracefully adapt whether viewed on a 4-inch phone or a 32-inch 4K monitor.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-8','preview-css-8')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-8" rows="22">&lt;style&gt;
  .responsive-box {
    background: #e0f2fe;
    color: #0369a1;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    font-family: sans-serif;
  }
  /* On desktop screens (wider than 600px): */
  @media (min-width: 600px) {
    .responsive-box {
      background: #ede9fe;
      color: #6d28d9;
    }
    .responsive-box::after {
      content: " 🖥️ (Desktop Screen Detected!)";
    }
  }
&lt;/style&gt;
&lt;div class="responsive-box"&gt;
  &lt;strong&gt;Resize your browser window!&lt;/strong&gt;
  &lt;p&gt;The background changes between blue (mobile) and purple (desktop).&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-8"></iframe>
          </div>
          <div id="quiz-css-8"></div>`,
        quiz: {
          question:
            "Which CSS block applies styles only when the user screen is 768px wide or smaller?",
          options: [
            "@media (max-width: 768px) { ... }",
            "@screen (width < 768px) { ... }",
            "@query (mobile: true) { ... }",
            "@device (max: 768) { ... }",
          ],
          correct: 0,
          explanation:
            "<strong>@media (max-width: 768px)</strong> targets all screens up to 768 pixels in width (tablets and smartphones).",
        },
      },
      {
        id: "css-9",
        title: "CSS Variables & Modern Theming",
        xp: 20,
        checklist: [
          "Declare custom properties with --",
          "Retrieve variables using var()",
          "Implement dark and light themes",
        ],
        content: `
          <div class="lesson-section">
            <h3>Variables in Pure CSS 🎨</h3>
            <p><strong>CSS Variables</strong> (Custom Properties) allow you to store colors, fonts, or measurements in one place and reuse them across your entire stylesheet.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-9','preview-css-9')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-9" rows="22">&lt;style&gt;
  :root {
    --brand-color: #7c3aed;
    --card-radius: 16px;
    --card-padding: 24px;
  }
  .theme-card {
    background: white;
    border: 2px solid var(--brand-color);
    border-radius: var(--card-radius);
    padding: var(--card-padding);
    font-family: sans-serif;
  }
  .theme-card h3 {
    color: var(--brand-color);
    margin: 0 0 8px;
  }
&lt;/style&gt;
&lt;div class="theme-card"&gt;
  &lt;h3&gt;Powered by CSS Variables&lt;/h3&gt;
  &lt;p&gt;Change --brand-color at the top of the style tag to orange or cyan and hit Run!&lt;/p&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-9"></iframe>
          </div>
          <div id="quiz-css-9"></div>`,
        quiz: {
          question:
            "What prefix must every CSS Custom Property (Variable) begin with?",
          options: ["$", "@", "--", "var-"],
          correct: 2,
          explanation:
            "CSS custom properties must always begin with <strong>two dashes (--)</strong>, like <code>--primary-color: #7c3aed;</code>, and are retrieved using <code>var(--primary-color)</code>.",
        },
      },
      {
        id: "css-10",
        title: "Milestone Project & Multi-Quiz: Responsive Card",
        xp: 40,
        checklist: [
          "Combine Flexbox, Box Model, and Gradients",
          "Add hover transitions and shadows",
          "Pass the 4-question CSS Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 4 Capstone: High-End UI Component 🏆</h3>
            <p>You have mastered CSS fundamentals, colors, typography, the box model, Flexbox, Grid, positioning, animations, and variables!</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-css-10','preview-css-10')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-css-10" rows="22">&lt;style&gt;
  .pricing-card {
    max-width: 280px;
    margin: 20px auto;
    background: linear-gradient(145deg, #ffffff, #f5f3ff);
    border: 1px solid #ddd6fe;
    border-radius: 20px;
    padding: 28px;
    text-align: center;
    font-family: sans-serif;
    box-shadow: 0 10px 30px rgba(124,58,237,0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(124,58,237,0.25);
  }
  .price {
    font-size: 38px;
    font-weight: 900;
    color: #7c3aed;
    margin: 14px 0;
  }
  .cta-btn {
    display: block;
    width: 100%;
    padding: 12px;
    background: #7c3aed;
    color: white;
    border-radius: 100px;
    text-decoration: none;
    font-weight: bold;
  }
&lt;/style&gt;
&lt;div class="pricing-card"&gt;
  &lt;h3 style="margin:0;color:#1e1b4b;"&gt;Pro Membership&lt;/h3&gt;
  &lt;div class="price"&gt;$19&lt;span style="font-size:16px;color:#6b7280;"&gt;/mo&lt;/span&gt;&lt;/div&gt;
  &lt;p style="color:#6b7280;font-size:14px;margin-bottom:20px;"&gt;Access to all 9 topics, quizzes, and live coding playgrounds.&lt;/p&gt;
  &lt;a href="#" class="cta-btn"&gt;Start Learning&lt;/a&gt;
&lt;/div&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-css-10"></iframe>
          </div>
          <div class="success-card">
            <div class="suc-icon">🎨</div>
            <p><strong>Milestone Challenge:</strong> Complete this 4-question quiz to earn the CSS Styling Champion Badge!</p>
          </div>
          <div id="multi-quiz-css-10"></div>`,
        quizzes: [
          {
            question:
              "What is the correct order of layers in the CSS Box Model from inside to outside?",
            options: [
              "Margin → Border → Padding → Content",
              "Content → Padding → Border → Margin",
              "Content → Border → Padding → Margin",
              "Padding → Content → Margin → Border",
            ],
            correct: 1,
            explanation:
              "The Box Model begins with the inner <strong>Content</strong>, surrounded by <strong>Padding</strong>, framed by the <strong>Border</strong>, and spaced out by <strong>Margin</strong>.",
          },
          {
            question:
              "Which layout model is best suited for 1-dimensional item distribution (like a navbar or button group)?",
            options: ["CSS Grid", "Flexbox", "Table Layout", "Float Layout"],
            correct: 1,
            explanation:
              "<strong>Flexbox</strong> is the gold standard for 1-dimensional row or column layouts.",
          },
          {
            question:
              'How do you target an element with class="btn-primary" in CSS?',
            options: [
              "#btn-primary { ... }",
              ".btn-primary { ... }",
              "btn-primary { ... }",
              "*btn-primary { ... }",
            ],
            correct: 1,
            explanation:
              "Class selectors always begin with a <strong>period (.)</strong>, while ID selectors begin with a hash (#).",
          },
          {
            question:
              "What CSS rule allows you to apply different styles depending on whether the visitor is on mobile or desktop?",
            options: ["@responsive", "@media", "@device", "@viewport"],
            correct: 1,
            explanation:
              "<strong>@media queries</strong> inspect device properties such as screen width and orientation to apply conditional styles.",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    emoji: "⚡",
    color: "#ca8a04",
    gradient: "linear-gradient(135deg, #f7df1e, #f8a900)",
    description:
      "Add interactivity, dynamic behavior, logic, and APIs to your websites",
    lessons: [
      {
        id: "js-1",
        title: "What is JavaScript?",
        xp: 10,
        checklist: [
          "Understand JavaScript's role as the web's programming language",
          "Run your first script in the live editor",
          "Handle a button click event",
        ],
        content: `
          <div class="lesson-section">
            <h3>Making the Web Come Alive ⚡</h3>
            <p><strong>JavaScript (JS)</strong> is the programming language of the web browser. While HTML provides structure and CSS provides styling, JavaScript gives the page a <strong>brain</strong>.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: A Flashlight</div>
            <p>HTML is the <strong>plastic casing and lightbulb</strong>. CSS is the <strong>sleek neon paint and ergonomic grip</strong>. JavaScript is the <strong>battery and the click switch</strong>: without JavaScript, pressing the button does nothing!</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-1','preview-js-1')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-1" rows="18">&lt;div style="text-align:center;font-family:sans-serif;padding:20px;"&gt;
  &lt;h2 id="headline"&gt;Waiting for action...&lt;/h2&gt;
  &lt;button onclick="sayHello()" style="padding:10px 20px;background:#ca8a04;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;"&gt;
    Click to Awaken JavaScript! ⚡
  &lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
  function sayHello() {
    const el = document.getElementById('headline');
    el.innerText = '🎉 JavaScript has awakened! Welcome to coding!';
    el.style.color = '#ca8a04';
  }
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-1"></iframe>
          </div>
          <div id="quiz-js-1"></div>`,
        quiz: {
          question:
            "What is the primary role of JavaScript in web development?",
          options: [
            "Storing files permanently on disk",
            "Adding interactivity, logic, and dynamic responses to user actions",
            "Structuring paragraphs and headings",
            "Defining color palettes in CSS",
          ],
          correct: 1,
          explanation:
            "JavaScript provides interactivity and logic, enabling websites to respond to clicks, validate user input, fetch data from servers, and animate interfaces.",
        },
      },
      {
        id: "js-2",
        title: "Variables & Data Types",
        xp: 15,
        checklist: [
          "Understand const vs let",
          "Learn strings, numbers, booleans",
          "Inspect values in the live editor",
        ],
        content: `
          <div class="lesson-section">
            <h3>Storing Information in Variables 📦</h3>
            <p>A <strong>variable</strong> is a labeled box that holds a value. In modern JavaScript, we declare variables with <code>const</code> and <code>let</code>.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-2','preview-js-2')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-2" rows="22">&lt;div id="display" style="font-family:sans-serif;padding:20px;background:#fefce8;border-radius:10px;"&gt;&lt;/div&gt;

&lt;script&gt;
  // const = value will never be reassigned
  const tutorName = 'Ollie the Owl 🦉';
  const birthYear = 2024;
  const isHelpful = true;

  // let = value can change later
  let currentStreak = 5;
  currentStreak = currentStreak + 1; // Now it's 6!

  document.getElementById('display').innerHTML =
    '&lt;p&gt;&lt;strong&gt;Tutor:&lt;/strong&gt; ' + tutorName + '&lt;/p&gt;' +
    '&lt;p&gt;&lt;strong&gt;Year:&lt;/strong&gt; ' + birthYear + '&lt;/p&gt;' +
    '&lt;p&gt;&lt;strong&gt;Is Helpful:&lt;/strong&gt; ' + isHelpful + '&lt;/p&gt;' +
    '&lt;p&gt;&lt;strong&gt;Streak:&lt;/strong&gt; ' + currentStreak + ' days 🔥&lt;/p&gt;';
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-2"></iframe>
          </div>
          <div class="tip-card"><div class="tip-icon">💡</div><p><strong>Rule of Thumb:</strong> Default to <code>const</code> for everything. Only change to <code>let</code> when you know you will reassign the variable. Avoid <code>var</code> — it is the legacy way with confusing scoping quirks.</p></div>
          <div id="quiz-js-2"></div>`,
        quiz: {
          question:
            "Which keyword should you use to declare a variable whose value will NEVER be reassigned?",
          options: ["var", "let", "const", "fixed"],
          correct: 2,
          explanation:
            "<strong>const</strong> prevents reassignment of the variable identifier, preventing accidental bugs.",
        },
      },
      {
        id: "js-3",
        title: "Operators & Comparison",
        xp: 15,
        checklist: [
          "Use arithmetic operators (+, -, *, /)",
          "Understand strict equality (=== vs ==)",
          "Use logical operators (&&, ||, !)",
        ],
        content: `
          <div class="lesson-section">
            <h3>Calculations & Comparisons ⚖️</h3>
            <p>Operators let you calculate numbers and compare values. In JavaScript, always use <strong>strict equality (<code>===</code>)</strong>!</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-3','preview-js-3')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-3" rows="22">&lt;div id="results" style="font-family:monospace;padding:16px;background:#1e1e2e;color:#cdd6f4;border-radius:8px;"&gt;&lt;/div&gt;

&lt;script&gt;
  const price = 20;
  const tax = price * 0.08;
  const total = price + tax;

  // Comparison
  const isExpensive = total > 50;
  const isExactTwenty = price === 20; // true (checks value AND type!)

  document.getElementById('results').innerHTML =
    'Price: $' + price + '&lt;br&gt;' +
    'Tax: $' + tax + '&lt;br&gt;' +
    'Total: $' + total + '&lt;br&gt;' +
    'Is Expensive (&gt;50)? ' + isExpensive + '&lt;br&gt;' +
    'Exact 20? ' + isExactTwenty;
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-3"></iframe>
          </div>
          <div id="quiz-js-3"></div>`,
        quiz: {
          question: "Why do JavaScript developers prefer === over ==?",
          options: [
            "=== runs 10x faster",
            "=== checks both the value AND the data type without sneaky automatic conversions",
            "=== is required by HTML5",
            "== does not work with numbers",
          ],
          correct: 1,
          explanation:
            "<strong>=== (strict equality)</strong> verifies that both the value AND the data type are identical, preventing subtle bugs caused by type coercion.",
        },
      },
      {
        id: "js-4",
        title: "Conditionals: If / Else & Decisions",
        xp: 20,
        checklist: [
          "Write if, else if, and else blocks",
          "Use the ternary operator",
          "Build a simple decision gate",
        ],
        content: `
          <div class="lesson-section">
            <h3>Making Smart Decisions in Code 🤔</h3>
            <p>Code that always does the exact same thing is boring. <strong>Conditionals</strong> allow your program to choose different paths based on circumstances.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-4','preview-js-4')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-4" rows="24">&lt;div style="font-family:sans-serif;padding:20px;"&gt;
  &lt;input type="number" id="userScore" value="85" style="padding:6px;width:80px;"&gt;
  &lt;button onclick="evaluateScore()" style="padding:6px 14px;background:#ca8a04;color:white;border:none;border-radius:6px;"&gt;Check Grade&lt;/button&gt;
  &lt;h3 id="gradeResult" style="margin-top:14px;"&gt;&lt;/h3&gt;
&lt;/div&gt;

&lt;script&gt;
  function evaluateScore() {
    const score = Number(document.getElementById('userScore').value);
    let grade = '';

    if (score >= 90) {
      grade = 'A 🌟 Outstanding!';
    } else if (score >= 80) {
      grade = 'B 🎉 Great work!';
    } else if (score >= 70) {
      grade = 'C 👍 Good effort!';
    } else {
      grade = 'Needs practice 💪 Keep studying!';
    }

    document.getElementById('gradeResult').innerText = 'Result: ' + grade;
  }
  evaluateScore();
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-4"></iframe>
          </div>
          <div id="quiz-js-4"></div>`,
        quiz: {
          question:
            "What block of code executes when none of the preceding if or else if conditions are true?",
          options: ["default:", "else", "finally", "fallback"],
          correct: 1,
          explanation:
            "The <strong>else</strong> block serves as the default catch-all that runs when all previous conditions evaluate to false.",
        },
      },
      {
        id: "js-5",
        title: "Loops: Repeating Tasks Effortlessly",
        xp: 20,
        checklist: [
          "Use standard for loops",
          "Use while loops",
          "Iterate over lists without copying code",
        ],
        content: `
          <div class="lesson-section">
            <h3>Automating Repetition with Loops 🔄</h3>
            <p>Computers excel at doing repetitive tasks thousands of times per second without getting tired. A <strong>loop</strong> repeats a block of code until a condition is met.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-5','preview-js-5')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-5" rows="20">&lt;ul id="loopOutput" style="font-family:sans-serif;"&gt;&lt;/ul&gt;

&lt;script&gt;
  const list = document.getElementById('loopOutput');
  list.innerHTML = '';

  // for (start; condition; increment)
  for (let i = 1; i <= 5; i++) {
    const item = document.createElement('li');
    item.innerText = 'Step ' + i + ': Coding lesson completed! ✅';
    list.appendChild(item);
  }
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-5"></iframe>
          </div>
          <div id="quiz-js-5"></div>`,
        quiz: {
          question:
            "How many times will a loop with for (let i = 0; i < 4; i++) run?",
          options: [
            "3 times",
            "4 times (i = 0, 1, 2, 3)",
            "5 times",
            "Infinite times",
          ],
          correct: 1,
          explanation:
            "The loop executes <strong>4 times</strong>: when i is 0, 1, 2, and 3. As soon as i becomes 4, the condition (i < 4) becomes false and the loop terminates.",
        },
      },
      {
        id: "js-6",
        title: "Functions & Modern Arrow Syntax",
        xp: 25,
        checklist: [
          "Declare functions with parameters",
          "Return values with return",
          "Write concise arrow functions (=>)",
        ],
        content: `
          <div class="lesson-section">
            <h3>Reusable Recipe Blocks 🔧</h3>
            <p>A <strong>function</strong> is a self-contained block of code designed to perform a particular task. You define it once, and can call it thousands of times with different inputs (arguments).</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-6','preview-js-6')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-6" rows="22">&lt;div id="calcBox" style="font-family:sans-serif;padding:16px;background:#f5f3ff;border-radius:10px;"&gt;&lt;/div&gt;

&lt;script&gt;
  // Traditional function declaration
  function calculateTotal(price, taxRate = 0.07) {
    return price + (price * taxRate);
  }

  // Modern concise Arrow Function
  const formatCurrency = (amount) => '$' + amount.toFixed(2);

  const finalPrice = calculateTotal(49.99);
  document.getElementById('calcBox').innerHTML =
    '&lt;h4&gt;Invoice Summary&lt;/h4&gt;' +
    '&lt;p&gt;Final Total (with tax): &lt;strong&gt;' + formatCurrency(finalPrice) + '&lt;/strong&gt;&lt;/p&gt;';
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-6"></iframe>
          </div>
          <div id="quiz-js-6"></div>`,
        quiz: {
          question:
            "What keyword passes a calculated result back to the caller of a function?",
          options: ["send", "output", "return", "give"],
          correct: 2,
          explanation:
            "The <strong>return</strong> statement ends function execution and specifies the value to be handed back to wherever the function was invoked.",
        },
      },
      {
        id: "js-7",
        title: "Arrays & Essential Methods",
        xp: 25,
        checklist: [
          "Create arrays with square brackets []",
          "Add items with push and remove with pop",
          "Transform lists with map and filter",
        ],
        content: `
          <div class="lesson-section">
            <h3>Ordered Lists of Data 🛒</h3>
            <p>An <strong>Array</strong> stores multiple values in a single variable. JavaScript provides powerful built-in methods like <code>map</code> and <code>filter</code> to manipulate them.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-7','preview-js-7')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-7" rows="24">&lt;div id="arrayOutput" style="font-family:sans-serif;padding:16px;"&gt;&lt;/div&gt;

&lt;script&gt;
  const scores = [65, 88, 92, 45, 78, 99];

  // filter: keep only passing scores (>= 70)
  const passingScores = scores.filter(score => score >= 70);

  // map: add a 5-point bonus curve to every score
  const curvedScores = passingScores.map(score => score + 5);

  document.getElementById('arrayOutput').innerHTML =
    '&lt;p&gt;&lt;strong&gt;Original Scores:&lt;/strong&gt; ' + scores.join(', ') + '&lt;/p&gt;' +
    '&lt;p&gt;&lt;strong&gt;Passing Only (&gt;=70):&lt;/strong&gt; ' + passingScores.join(', ') + '&lt;/p&gt;' +
    '&lt;p&gt;&lt;strong&gt;Curved Passing (+5):&lt;/strong&gt; ' + curvedScores.join(', ') + '&lt;/p&gt;';
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-7"></iframe>
          </div>
          <div id="quiz-js-7"></div>`,
        quiz: {
          question:
            "Which array method creates a NEW array by transforming every item according to a function?",
          options: ["filter()", "map()", "forEach()", "push()"],
          correct: 1,
          explanation:
            "<strong>map()</strong> runs a function on every element of an array and returns a brand-new array containing the transformed results.",
        },
      },
      {
        id: "js-8",
        title: "Objects: Real-World Entities",
        xp: 25,
        checklist: [
          "Create objects with curly braces {}",
          "Access properties using dot notation",
          "Add methods inside objects",
        ],
        content: `
          <div class="lesson-section">
            <h3>Grouping Related Data Together 🗂️</h3>
            <p>An <strong>Object</strong> models real-world things (a user, a product, a car) by pairing <strong>keys</strong> and <strong>values</strong>.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-8','preview-js-8')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-8" rows="24">&lt;div id="userCard" style="font-family:sans-serif;padding:20px;background:#fdf2f8;border-radius:12px;border:1px solid #fbcfe8;"&gt;&lt;/div&gt;

&lt;script&gt;
  const learner = {
    firstName: 'Maya',
    role: 'Frontend Apprentice',
    xp: 450,
    coursesCompleted: ['HTML', 'CSS'],
    // Object Method:
    getBio: function() {
      return this.firstName + ' has earned ' + this.xp + ' XP and completed ' + this.coursesCompleted.length + ' courses!';
    }
  };

  document.getElementById('userCard').innerHTML =
    '&lt;h3 style="margin:0 0 6px;"&gt;' + learner.firstName + ' (' + learner.role + ')&lt;/h3&gt;' +
    '&lt;p style="color:#6b7280;"&gt;' + learner.getBio() + '&lt;/p&gt;';
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-8"></iframe>
          </div>
          <div id="quiz-js-8"></div>`,
        quiz: {
          question:
            'If user = { name: "Alex", age: 24 }, how do you access the age property using dot notation?',
          options: ["user(age)", "user[0]", "user.age", "user->age"],
          correct: 2,
          explanation:
            "In JavaScript, object properties are most commonly accessed using <strong>dot notation (user.age)</strong>.",
        },
      },
      {
        id: "js-9",
        title: "DOM Manipulation & Event Listeners",
        xp: 30,
        checklist: [
          "Select elements with querySelector",
          "Listen for clicks with addEventListener",
          "Toggle CSS classes dynamically",
        ],
        content: `
          <div class="lesson-section">
            <h3>Controlling the Webpage with Code 🕹️</h3>
            <p>The <strong>DOM</strong> (Document Object Model) is the browser's internal tree of all HTML elements. JavaScript can read, change, add, or delete any element on the fly!</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-9','preview-js-9')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-9" rows="24">&lt;style&gt;
  .dark-card { background: #1e1b4b; color: white; }
  .light-card { background: #f5f3ff; color: #1e1b4b; }
&lt;/style&gt;

&lt;div id="myBox" class="light-card" style="padding:24px;border-radius:12px;font-family:sans-serif;text-align:center;"&gt;
  &lt;h3 id="cardTitle"&gt;Light Mode Active&lt;/h3&gt;
  &lt;button id="toggleBtn" style="padding:8px 16px;border:none;border-radius:6px;cursor:pointer;background:#7c3aed;color:white;"&gt;
    Toggle Theme
  &lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
  const box = document.querySelector('#myBox');
  const btn = document.querySelector('#toggleBtn');
  const title = document.querySelector('#cardTitle');

  btn.addEventListener('click', () => {
    box.classList.toggle('dark-card');
    box.classList.toggle('light-card');
    const isDark = box.classList.contains('dark-card');
    title.innerText = isDark ? 'Dark Mode Active 🌙' : 'Light Mode Active ☀️';
  });
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-9"></iframe>
          </div>
          <div id="quiz-js-9"></div>`,
        quiz: {
          question:
            "What modern method attaches a click event handler to an HTML button element?",
          options: [
            "btn.onClick(() => {})",
            'btn.addEventListener("click", () => {})',
            'btn.attachEvent("click")',
            'btn.listen("click")',
          ],
          correct: 1,
          explanation:
            '<strong>addEventListener("click", callback)</strong> is the standard, modern way to attach event listeners to elements.',
        },
      },
      {
        id: "js-10",
        title: "Fetch API, Async / Await & JSON",
        xp: 30,
        checklist: [
          "Understand asynchronous code",
          "Use fetch() to get live API data",
          "Parse JSON with async and await",
        ],
        content: `
          <div class="lesson-section">
            <h3>Talking to Cloud Servers 🌐</h3>
            <p>Modern web apps don't reload the entire page to get data. They use <code>fetch()</code> with <code>async/await</code> to silently retrieve data from APIs in JSON format.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-10','preview-js-10')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-10" rows="24">&lt;div style="font-family:sans-serif;padding:20px;text-align:center;"&gt;
  &lt;button onclick="fetchJoke()" style="padding:10px 20px;background:#7c3aed;color:white;border:none;border-radius:100px;cursor:pointer;font-weight:bold;"&gt;
    Get a Random Programming Joke 🚀
  &lt;/button&gt;
  &lt;div id="jokeBox" style="margin-top:20px;padding:16px;background:#f5f3ff;border-radius:10px;min-height:60px;"&gt;
    Click the button above to fetch data from a live API!
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  async function fetchJoke() {
    const box = document.getElementById('jokeBox');
    box.innerText = 'Fetching from API... ⏳';
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      box.innerHTML = '&lt;p&gt;&lt;strong&gt;' + data.setup + '&lt;/strong&gt;&lt;/p&gt;&lt;p style="color:#7c3aed;"&gt;' + data.punchline + ' 😂&lt;/p&gt;';
    } catch (err) {
      box.innerText = 'Failed to load joke — check your connection!';
    }
  }
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-10"></iframe>
          </div>
          <div id="quiz-js-10"></div>`,
        quiz: {
          question:
            "What keyword pauses an asynchronous function until a Promise (such as a fetch request) resolves?",
          options: ["wait", "pause", "await", "defer"],
          correct: 2,
          explanation:
            "<strong>await</strong> pauses execution within an <code>async</code> function until the Promise settles, making asynchronous code read like clean synchronous code.",
        },
      },
      {
        id: "js-11",
        title: "Milestone Project & Multi-Quiz: Task Tracker",
        xp: 45,
        checklist: [
          "Combine inputs, buttons, arrays, and DOM updates",
          "Build an interactive to-do list",
          "Pass the 4-question JavaScript Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 5 Capstone: Interactive Web App 🏆</h3>
            <p>You have conquered JavaScript fundamentals! You understand variables, data types, operators, conditionals, loops, functions, arrays, objects, DOM manipulation, and asynchronous APIs.</p>
          </div>
          <div class="code-editor-wrapper">
            <div class="editor-toolbar">
              <div class="editor-toolbar-left"><div class="editor-dot red"></div><div class="editor-dot yellow"></div><div class="editor-dot green"></div></div>
              <div class="editor-toolbar-right"><button class="editor-btn run-btn" onclick="runEditorCode('editor-js-11','preview-js-11')">▶ Run</button></div>
            </div>
            <textarea class="code-textarea" id="editor-js-11" rows="24">&lt;div style="max-width:340px;margin:10px auto;font-family:sans-serif;padding:20px;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 8px 20px rgba(0,0,0,0.06);"&gt;
  &lt;h3 style="margin:0 0 12px;color:#1e1b4b;"&gt;My Learning To-Do 📝&lt;/h3&gt;
  &lt;div style="display:flex;gap:8px;margin-bottom:14px;"&gt;
    &lt;input type="text" id="taskInput" placeholder="Add new task..." style="flex:1;padding:8px;border:1px solid #d1d5db;border-radius:8px;"&gt;
    &lt;button onclick="addTask()" style="padding:8px 14px;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:bold;"&gt;+ Add&lt;/button&gt;
  &lt;/div&gt;
  &lt;ul id="taskList" style="list-style:none;padding:0;margin:0;"&gt;&lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
  function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.style.cssText = 'padding:10px;background:#f5f3ff;border-radius:8px;margin-bottom:8px;display:flex;justify-content:space-between;cursor:pointer;';
    li.innerHTML = '&lt;span&gt;📌 ' + text + '&lt;/span&gt;&lt;span style="color:#ef4444;" onclick="this.parentElement.remove()"&gt;✕&lt;/span&gt;';
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
&lt;/script&gt;</textarea>
            <div class="output-label">Live Output Preview</div>
            <iframe class="preview-iframe" id="preview-js-11"></iframe>
          </div>
          <div class="success-card">
            <div class="suc-icon">⚡</div>
            <p><strong>Milestone Challenge:</strong> Complete this 4-question quiz to claim your JavaScript Developer Certificate!</p>
          </div>
          <div id="multi-quiz-js-11"></div>`,
        quizzes: [
          {
            question:
              "Which method adds a new item to the END of a JavaScript array?",
            options: [
              "arr.unshift()",
              "arr.push()",
              "arr.append()",
              "arr.insert()",
            ],
            correct: 1,
            explanation:
              "<code>arr.push()</code> adds one or more elements to the end of an array and returns the new array length.",
          },
          {
            question: 'What does the querySelector("#submit-btn") method do?',
            options: [
              "Finds all elements on the page",
              'Finds the first HTML element with id="submit-btn"',
              "Creates a new button",
              "Deletes the submit button",
            ],
            correct: 1,
            explanation:
              '<code>querySelector("#submit-btn")</code> selects the first DOM element matching the CSS ID selector "#submit-btn".',
          },
          {
            question:
              "What is the format of data exchanged most frequently in modern web APIs?",
            options: [
              "XML",
              "CSV",
              "JSON (JavaScript Object Notation)",
              "Plain binary",
            ],
            correct: 2,
            explanation:
              "<strong>JSON</strong> (JavaScript Object Notation) is the lightweight standard format for exchanging data between clients and servers.",
          },
          {
            question:
              "What happens if you try to reassign a variable declared with const?",
            options: [
              "The variable changes quietly without warning",
              "A TypeError is thrown: Assignment to constant variable",
              "The variable converts into let",
              "The computer shuts down",
            ],
            correct: 1,
            explanation:
              "JavaScript throws a <strong>TypeError</strong> whenever you attempt to reassign a variable declared with <code>const</code>.",
          },
        ],
      },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    emoji: "🔷",
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #3178c6, #235a9b)",
    description:
      "Write safer, robust, enterprise-grade applications with static typing",
    lessons: [
      {
        id: "ts-1",
        title: "What is TypeScript?",
        xp: 10,
        checklist: [
          "Understand TypeScript as a typed superset of JavaScript",
          "Learn compile-time error checking",
          "Understand transpilation into vanilla JS",
        ],
        content: `
          <div class="lesson-section">
            <h3>JavaScript with a Safety Net 🔷</h3>
            <p><strong>TypeScript</strong> was created by Anders Hejlsberg at Microsoft to solve JavaScript's biggest problem: runtime errors that surprise you when users are using your app.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Spell-Checker</div>
            <p>JavaScript is like writing a book in a plain text editor with <strong>zero spell-check</strong>. If you make a typo, you won't know until the book is printed and sold. TypeScript is the <strong>smart word processor with instant red squiggly underlines</strong> highlighting mistakes the exact moment you type them!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">JavaScript vs TypeScript</span></div>
            <pre><span class="comment">// In regular JavaScript (silent bugs!):</span>
<span class="keyword">function</span> sendInvoice(customer, amount) {
  <span class="keyword">return</span> amount.toFixed(2);
}
sendInvoice(<span class="string">'Acme Corp'</span>, <span class="string">'fifty'</span>);
<span class="comment">// 💥 Crash at runtime: TypeError: amount.toFixed is not a function!</span>

<span class="comment">// In TypeScript (caught before you even save!):</span>
<span class="keyword">function</span> sendInvoice(customer: <span class="function">string</span>, amount: <span class="function">number</span>): <span class="function">string</span> {
  <span class="keyword">return</span> amount.toFixed(2);
}
sendInvoice(<span class="string">'Acme Corp'</span>, <span class="string">'fifty'</span>);
<span class="comment">// ❌ TypeScript Error: Argument of type 'string' is not assignable to parameter of type 'number'.</span></pre>
          </div>
          <div class="info-box"><div class="info-icon">💡</div><p><strong>Browsers don't run TypeScript directly:</strong> The TypeScript compiler (<code>tsc</code>) checks your code for errors, removes all the type annotations, and outputs clean, standard JavaScript that every browser understands!</p></div>
          <div id="quiz-ts-1"></div>`,
        quiz: {
          question:
            "What is the primary benefit of using TypeScript over plain JavaScript?",
          options: [
            "It makes websites render with 3D graphics",
            "It catches type mistakes and bugs at write-time before the code ever runs",
            "It replaces the need for HTML and CSS",
            "It runs directly in older web browsers without compilation",
          ],
          correct: 1,
          explanation:
            "TypeScript provides static type analysis that catches errors, typos, and mismatches right in your editor before runtime.",
        },
      },
      {
        id: "ts-2",
        title: "Primitive Types & Type Annotations",
        xp: 15,
        checklist: [
          "Annotate string, number, and boolean",
          "Understand type inference",
          'Avoid using the "any" escape hatch',
        ],
        content: `
          <div class="lesson-section">
            <h3>Explicitly Stating Intent 🏷️</h3>
            <p>You add types in TypeScript using a colon (<code>:</code>) followed by the type name:</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">TypeScript Primitives</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="keyword">let</span> username: <span class="function">string</span> = <span class="string">'Elena'</span>;
<span class="keyword">let</span> score: <span class="function">number</span> = 100;
<span class="keyword">let</span> hasPassed: <span class="function">boolean</span> = <span class="keyword">true</span>;

<span class="comment">// Type Inference: TypeScript often figures it out automatically!</span>
<span class="keyword">let</span> country = <span class="string">'Japan'</span>; <span class="comment">// Automatically inferred as string</span>
country = 42; <span class="comment">// ❌ Error: Type 'number' is not assignable to type 'string'</span>

<span class="comment">// The 'any' type: Disables all type checking (use sparingly!)</span>
<span class="keyword">let</span> mystery: <span class="function">any</span> = <span class="string">'could be anything'</span>;
mystery = 123; <span class="comment">// Allowed, but loses TypeScript superpowers</span></pre>
          </div>
          <div class="warning-card"><div class="warn-icon">⚠️</div><p><strong>Avoid "any":</strong> Using <code>any</code> tells TypeScript to shut off its safety checks. If you use <code>any</code> everywhere, you are essentially writing plain JavaScript without any of TypeScript's protections!</p></div>
          <div id="quiz-ts-2"></div>`,
        quiz: {
          question:
            'What happens if you assign a number to a variable originally declared as: let title: string = "Hello"?',
          options: [
            "The variable automatically changes its type to number without error",
            'TypeScript displays an error: Type "number" is not assignable to type "string"',
            "The computer restarts",
            "The string concatenates the number",
          ],
          correct: 1,
          explanation:
            "TypeScript strictly enforces that a variable annotated as <code>string</code> can never be reassigned a value of type <code>number</code>.",
        },
      },
      {
        id: "ts-3",
        title: "Arrays, Tuples & Enums",
        xp: 20,
        checklist: [
          "Type arrays using type[] syntax",
          "Create fixed-length Tuples",
          "Define readable Enum states",
        ],
        content: `
          <div class="lesson-section">
            <h3>Typed Collections 📦</h3>
            <p>TypeScript ensures your arrays don't accidentally get polluted with invalid data types, and lets you define fixed structures like <strong>Tuples</strong> and <strong>Enums</strong>.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment">// 1. Typed Arrays (only numbers allowed)</span>
<span class="keyword">const</span> prices: <span class="function">number</span>[] = [9.99, 19.99, 49.99];
prices.push(<span class="string">'free'</span>); <span class="comment">// ❌ Error: Argument of type 'string' not assignable to 'number'</span>

<span class="comment">// 2. Tuples: Exact fixed-length & exact type order</span>
<span class="keyword">let</span> coordinate: [<span class="function">number</span>, <span class="function">number</span>] = [40.7128, -74.0060];
<span class="keyword">let</span> userRecord: [<span class="function">number</span>, <span class="function">string</span>] = [1, <span class="string">'Alice'</span>];

<span class="comment">// 3. Enums: Named constants for clean state management</span>
<span class="keyword">enum</span> OrderStatus {
  Pending = <span class="string">'PENDING'</span>,
  Shipped = <span class="string">'SHIPPED'</span>,
  Delivered = <span class="string">'DELIVERED'</span>,
}

<span class="keyword">let</span> currentStatus = OrderStatus.Shipped;</pre>
          </div>
          <div id="quiz-ts-3"></div>`,
        quiz: {
          question:
            "What does the type [string, number] represent in TypeScript?",
          options: [
            "An array that can contain unlimited strings and numbers in any order",
            "A Tuple with exactly two items: first a string, second a number",
            "A function that takes two arguments",
            "A special kind of object",
          ],
          correct: 1,
          explanation:
            "A <strong>Tuple</strong> is a fixed-length array where the type of each specific index position is strictly predefined.",
        },
      },
      {
        id: "ts-4",
        title: "Interfaces & Type Aliases",
        xp: 25,
        checklist: [
          "Define object blueprints with interface",
          "Make properties optional with ?",
          "Mark properties as readonly",
        ],
        content: `
          <div class="lesson-section">
            <h3>Blueprints for Objects 📐</h3>
            <p>An <strong>Interface</strong> describes the exact shape an object must satisfy — what properties it has, their types, and which are optional.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Defining an Interface</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="keyword">interface</span> Product {
  <span class="keyword">readonly</span> id: <span class="function">number</span>;      <span class="comment">// Cannot be modified after creation</span>
  title: <span class="function">string</span>;
  price: <span class="function">number</span>;
  description?: <span class="function">string</span>;     <span class="comment">// ? means optional!</span>
}

<span class="keyword">const</span> laptop: Product = {
  id: 101,
  title: <span class="string">'MacBook Air M3'</span>,
  price: 1099,
  <span class="comment">// description is omitted, which is completely valid!</span>
};

laptop.id = 999; <span class="comment">// ❌ Error: Cannot assign to 'id' because it is a read-only property.</span></pre>
          </div>
          <div class="tip-card"><div class="tip-icon">✨</div><p><strong>Autocomplete Superpower:</strong> When you type <code>laptop.</code> in VS Code, TypeScript displays a dropdown list of every single property available with its exact type. No more guessing property names!</p></div>
          <div id="quiz-ts-4"></div>`,
        quiz: {
          question:
            "How do you make a property optional inside a TypeScript interface?",
          options: [
            'Add the "optional" keyword before the property name',
            "Add a question mark (?) after the property name (e.g. bio?: string)",
            "Set its type to null",
            "Enclose the property name in parentheses",
          ],
          correct: 1,
          explanation:
            "The <strong>question mark (?)</strong> after a property name signals that the property is optional and does not have to be provided when instantiating the object.",
        },
      },
      {
        id: "ts-5",
        title: "Union Types & Type Narrowing",
        xp: 25,
        checklist: [
          "Combine types with the pipe | operator",
          "Narrow types using typeof checks",
          "Handle multiple possible inputs safely",
        ],
        content: `
          <div class="lesson-section">
            <h3>Accepting Multiple Possible Types 🔀</h3>
            <p>Sometimes a value can be more than one type. For example, an ID might be a <code>number</code> (101) or a <code>string</code> ("uuid-abc"). You represent this with a <strong>Union Type (<code>|</code>)</strong>.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Union Types & Narrowing</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="keyword">function</span> printId(id: <span class="function">number</span> | <span class="function">string</span>) {
  <span class="comment">// Type Narrowing using typeof:</span>
  <span class="keyword">if</span> (<span class="keyword">typeof</span> id === <span class="string">'string'</span>) {
    console.log(<span class="string">'String ID in uppercase:'</span>, id.toUpperCase());
  } <span class="keyword">else</span> {
    console.log(<span class="string">'Numeric ID fixed:'</span>, id.toFixed(0));
  }
}

printId(42);           <span class="comment">// ✅ Valid number</span>
printId(<span class="string">'user_99a'</span>);   <span class="comment">// ✅ Valid string</span>
printId(<span class="keyword">true</span>);         <span class="comment">// ❌ Error: boolean is not assignable to number | string</span></pre>
          </div>
          <div id="quiz-ts-5"></div>`,
        quiz: {
          question: "Which operator creates a Union Type in TypeScript?",
          options: ["& (Ampersand)", "| (Pipe)", "+ (Plus)", "~ (Tilde)"],
          correct: 1,
          explanation:
            "The <strong>pipe symbol (|)</strong> creates a Union Type, meaning the value can be of type A OR type B (e.g. <code>string | number</code>).",
        },
      },
      {
        id: "ts-6",
        title: "Generics: Reusable Type Safety",
        xp: 30,
        checklist: [
          "Understand what a generic type parameter <T> is",
          "Write generic functions that adapt to any type",
          "Preserve type information through functions",
        ],
        content: `
          <div class="lesson-section">
            <h3>Variables for Types 🧬</h3>
            <p><strong>Generics</strong> allow you to write functions and classes that work with any data type while still preserving complete type safety.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Generic Functions with &lt;T&gt;</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment">// &lt;T&gt; is a placeholder type (stands for Type)</span>
<span class="keyword">function</span> getFirstElement&lt;T&gt;(items: T[]): T {
  <span class="keyword">return</span> items[0];
}

<span class="keyword">const</span> firstNumber = getFirstElement([10, 20, 30]);      <span class="comment">// TypeScript knows this is number!</span>
<span class="keyword">const</span> firstString = getFirstElement([<span class="string">'apple'</span>, <span class="string">'pear'</span>]);  <span class="comment">// TypeScript knows this is string!</span>

firstString.toUpperCase(); <span class="comment">// ✅ Valid! Full autocomplete available!</span></pre>
          </div>
          <div class="info-box"><div class="info-icon">💡</div><p>Without generics, you would either have to use <code>any</code> (losing all type safety) or write duplicate functions for numbers, strings, and custom objects!</p></div>
          <div id="quiz-ts-6"></div>`,
        quiz: {
          question:
            "What does the <T> syntax denote in a generic function in TypeScript?",
          options: [
            "An HTML tag",
            "A generic type parameter placeholder that will be replaced with the actual type passed in",
            "A temporary variable that only exists in memory for 1 second",
            "A TypeScript testing framework",
          ],
          correct: 1,
          explanation:
            "<code>&lt;T&gt;</code> is a <strong>type parameter</strong> that captures the type argument provided by the caller, preserving full type fidelity.",
        },
      },
      {
        id: "ts-7",
        title: "TypeScript with the DOM",
        xp: 25,
        checklist: [
          "Cast DOM elements with as HTMLInputElement",
          "Handle null checks safely with optional chaining (?.)",
          "Type event handlers accurately",
        ],
        content: `
          <div class="lesson-section">
            <h3>Typing Webpage Elements 🌐</h3>
            <p>When selecting elements from HTML, <code>document.getElementById</code> returns a generic <code>HTMLElement | null</code>. To access specific properties like <code>.value</code> on an input, you use a <strong>Type Assertion (<code>as</code>)</strong>.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">DOM Elements in TypeScript</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment">// Type assertion tells TypeScript this is specifically an input element:</span>
<span class="keyword">const</span> input = document.getElementById(<span class="string">'emailInput'</span>) <span class="keyword">as</span> HTMLInputElement;

<span class="keyword">if</span> (input) {
  <span class="comment">// .value is recognized without any errors!</span>
  console.log(<span class="string">'User typed:'</span>, input.value);
}

<span class="comment">// Typed click event:</span>
<span class="keyword">const</span> btn = document.querySelector(<span class="string">'#submitBtn'</span>);
btn?.addEventListener(<span class="string">'click'</span>, (event: MouseEvent) => {
  console.log(<span class="string">'Clicked at coordinates:'</span>, event.clientX, event.clientY);
});</pre>
          </div>
          <div id="quiz-ts-7"></div>`,
        quiz: {
          question:
            "Which keyword tells TypeScript to treat a generic HTMLElement as a specific HTMLInputElement to access .value?",
          options: ["cast", "as", "type", "convert"],
          correct: 1,
          explanation:
            "The <strong>as</strong> keyword performs a type assertion, instructing the compiler to treat the selected element as a specific type like <code>HTMLInputElement</code>.",
        },
      },
      {
        id: "ts-8",
        title: "Milestone Project & Multi-Quiz: Type-Safe Cart",
        xp: 45,
        checklist: [
          "Review interfaces, tuples, and generics",
          "Inspect a fully typed shopping cart architecture",
          "Pass the 4-question TypeScript Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 6 Capstone: Enterprise TypeScript Mastery 🏆</h3>
            <p>You have mastered modern TypeScript: primitives, type inference, tuples, enums, interfaces, union types, generics, and DOM type safety.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Type-Safe Shopping Cart System</span></div>
            <pre><span class="keyword">interface</span> CartItem {
  id: <span class="function">string</span>;
  title: <span class="function">string</span>;
  unitPrice: <span class="function">number</span>;
  quantity: <span class="function">number</span>;
}

<span class="keyword">class</span> ShoppingCart {
  <span class="keyword">private</span> items: CartItem[] = [];

  addItem(item: CartItem): <span class="function">void</span> {
    this.items.push(item);
  }

  calculateTotal(): <span class="function">number</span> {
    <span class="keyword">return</span> this.items.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  }
}

<span class="keyword">const</span> cart = <span class="keyword">new</span> ShoppingCart();
cart.addItem({ id: <span class="string">'item_1'</span>, title: <span class="string">'Mechanical Keyboard'</span>, unitPrice: 89.99, quantity: 1 });
console.log(<span class="string">'Total: $'</span> + cart.calculateTotal().toFixed(2));</pre>
          </div>
          <div class="success-card">
            <div class="suc-icon">🔷</div>
            <p><strong>Milestone Challenge:</strong> Complete this 4-question quiz to receive your TypeScript Certified Developer Badge!</p>
          </div>
          <div id="multi-quiz-ts-8"></div>`,
        quizzes: [
          {
            question: "What is the role of the TypeScript compiler (tsc)?",
            options: [
              "To run your code on the server",
              "To check for type errors and strip annotations to emit valid JavaScript",
              "To style your website automatically",
              "To host your database",
            ],
            correct: 1,
            explanation:
              "The TypeScript compiler verifies types at compile time and emits clean JavaScript for runtime execution.",
          },
          {
            question:
              "Which of the following creates a contract defining the required shape of an object?",
            options: ["interface", "enum", "loop", "module"],
            correct: 0,
            explanation:
              "An <strong>interface</strong> defines a type contract describing property names and types that an object must implement.",
          },
          {
            question:
              "What does the question mark indicate in: interface User { avatarUrl?: string }?",
            options: [
              "The property is private",
              "The property is optional and may be omitted",
              "The property must be a boolean",
              "The property cannot be read",
            ],
            correct: 1,
            explanation:
              "The <code>?</code> modifier denotes an optional property.",
          },
          {
            question:
              "Why are Generics (<T>) valuable in TypeScript applications?",
            options: [
              "They make code compile into binary machine code",
              "They enable reusable functions and classes while preserving precise type safety",
              "They bypass security checks",
              "They replace SQL queries",
            ],
            correct: 1,
            explanation:
              "Generics let you create flexible, reusable components that work seamlessly across various types without forfeiting type checking.",
          },
        ],
      },
    ],
  },
  {
    id: "excel",
    name: "Microsoft Excel",
    emoji: "📊",
    color: "#15803d",
    gradient: "linear-gradient(135deg, #217346, #1e6b3f)",
    description:
      "Master spreadsheets, data analysis, core formulas, lookups, and PivotTables",
    lessons: [
      {
        id: "excel-1",
        title: "The Excel Interface & Navigation",
        xp: 10,
        checklist: [
          "Identify workbooks, sheets, and cell addresses",
          "Understand columns (letters) vs rows (numbers)",
          "Navigate efficiently with keyboard shortcuts",
        ],
        content: `
          <div class="lesson-section">
            <h3>Welcome to Spreadsheets! 📊</h3>
            <p><strong>Microsoft Excel</strong> is the world's most widely used software for organizing, calculating, and analyzing data in businesses, finance, science, and everyday life.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: A Magic Ledger Book</div>
            <p>Think of an old-fashioned paper ledger with rows and columns. In a paper book, if you change one number on line 3, you have to grab an eraser and recalculate every total on the page by hand. In Excel, every formula <strong>automatically recalculates the exact microsecond you update any cell</strong>!</p>
          </div>
          <div class="lesson-section">
            <h3>Anatomy of the Excel Grid:</h3>
            <ul>
              <li>📘 <strong>Workbook:</strong> The entire Excel file (saved as <code>.xlsx</code>).</li>
              <li>📄 <strong>Worksheet (Sheet):</strong> A single grid tab inside the workbook (Sheet1, Sheet2).</li>
              <li>↔️ <strong>Columns:</strong> Vertical strips identified by letters: <strong>A, B, C... Z, AA, AB...</strong></li>
              <li>↕️ <strong>Rows:</strong> Horizontal lines identified by numbers: <strong>1, 2, 3... 1,048,576</strong>.</li>
              <li>⬛ <strong>Cell:</strong> The intersection of a column and row. Column letter always comes first: <strong>B4</strong> means Column B, Row 4.</li>
            </ul>
          </div>
          <div class="tip-card"><div class="tip-icon">⌨️</div><p><strong>Speed Shortcuts:</strong> Use <strong>Enter</strong> to move down one cell · <strong>Tab</strong> to move right · <strong>Shift+Enter</strong> to move up · <strong>Ctrl+Home</strong> to immediately jump back to A1.</p></div>
          <div id="quiz-excel-1"></div>`,
        quiz: {
          question:
            "What is the correct cell address for the intersection of column D and row 12?",
          options: ["12D", "D-12", "D12", "Row12ColD"],
          correct: 2,
          explanation:
            "In spreadsheets, cell coordinates are always written with the <strong>column letter first, followed by the row number (D12)</strong>.",
        },
      },
      {
        id: "excel-2",
        title: "Data Entry, AutoFill & Formatting",
        xp: 15,
        checklist: [
          "Learn how Excel auto-aligns text vs numbers",
          "Use the AutoFill green handle for quick series",
          "Format currency, percentages, and dates",
        ],
        content: `
          <div class="lesson-section">
            <h3>Entering & Polishing Data ✨</h3>
            <p>Excel handles different data types automatically and provides tools to format numbers into currencies, percentages, and dates.</p>
          </div>
          <div class="lesson-section">
            <h3>Text vs Numbers: How Excel Tells Them Apart</h3>
            <ul>
              <li>📝 <strong>Text</strong> aligns to the <strong>LEFT</strong> of the cell automatically (e.g. names, notes).</li>
              <li>🔢 <strong>Numbers</strong> align to the <strong>RIGHT</strong> of the cell automatically (e.g. 42, $1,500.00).</li>
            </ul>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 The Magic AutoFill Handle</div>
            <p>Type "Monday" in A1. Click the small green square in the bottom-right corner of the cell and drag it down. Excel automatically fills Tuesday, Wednesday, Thursday... It works for months (Jan, Feb), dates, and numbered series (Step 1, Step 2)!</p>
          </div>
          <div class="tip-card"><div class="tip-icon">💲</div><p><strong>Never type dollar signs manually:</strong> Type pure numbers like <code>1500.5</code> and click the <strong>$ (Accounting)</strong> button on the Ribbon. This ensures formulas can still calculate with the number!</p></div>
          <div id="quiz-excel-2"></div>`,
        quiz: {
          question:
            "By default, how does Excel horizontally align numbers in a cell?",
          options: ["Left-aligned", "Centered", "Right-aligned", "Justified"],
          correct: 2,
          explanation:
            "Excel automatically <strong>right-aligns numbers</strong> and left-aligns text by default, which keeps decimal places and digits aligned vertically.",
        },
      },
      {
        id: "excel-3",
        title: "Basic Formulas: The Equals Sign Magic",
        xp: 20,
        checklist: [
          "Start every formula with =",
          "Use cell references (A1 + B1)",
          "Understand relative vs absolute ($A$1) references",
        ],
        content: `
          <div class="lesson-section">
            <h3>Formulas: Turning Cells into Calculators ➕</h3>
            <p>Every calculation in Excel MUST begin with an <strong>equals sign (<code>=</code>)</strong>. If you forget the <code>=</code>, Excel treats your math as plain text.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Excel Formula Basics</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre>=A1 + B1      <span class="comment"># Adds contents of cell A1 and B1</span>
=A1 - B1      <span class="comment"># Subtraction</span>
=A1 * B1      <span class="comment"># Multiplication (asterisk)</span>
=A1 / B1      <span class="comment"># Division (forward slash)</span>
=(A1 + B1) * 2<span class="comment"># Parentheses control order of operations (PEMDAS)</span></pre>
          </div>
          <div class="lesson-section">
            <h3>Relative vs Absolute References ($A$1)</h3>
            <p>When you drag a formula down, references shift relatively (A1 becomes A2, A3). If you want a cell (like a Tax Rate in C1) to remain frozen, lock it with dollar signs: <strong><code>$C$1</code></strong>!</p>
            <p><em>Shortcut: Press <strong>F4</strong> while typing a cell address to toggle the <code>$</code> locks automatically.</em></p>
          </div>
          <div id="quiz-excel-3"></div>`,
        quiz: {
          question: "What character must every Excel formula begin with?",
          options: ["#", "=", "+", "@"],
          correct: 1,
          explanation:
            "Every formula in Excel must begin with an <strong>equals sign (=)</strong> to signal that the cell contains a mathematical computation.",
        },
      },
      {
        id: "excel-4",
        title: "Essential Functions: SUM, AVERAGE, COUNT",
        xp: 20,
        checklist: [
          "Use =SUM(range)",
          "Calculate averages and counts",
          "Find largest and smallest values with MAX and MIN",
        ],
        content: `
          <div class="lesson-section">
            <h3>Built-In Power Functions ⚡</h3>
            <p>Instead of typing <code>=A1+A2+A3+A4+A5+A6+A7+A8+A9+A10</code>, Excel provides convenient pre-built functions:</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Top 5 Core Functions</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre>=SUM(B2:B20)       <span class="comment"># Adds all numbers from B2 through B20</span>
=AVERAGE(B2:B20)   <span class="comment"># Computes the mathematical mean</span>
=COUNT(B2:B20)     <span class="comment"># Counts how many cells contain numbers</span>
=COUNTA(A2:A20)    <span class="comment"># Counts all non-empty cells (including text)</span>
=MAX(C2:C50)       <span class="comment"># Finds the highest value</span>
=MIN(C2:C50)       <span class="comment"># Finds the lowest value</span></pre>
          </div>
          <div class="tip-card"><div class="tip-icon">⚡</div><p><strong>The Colon (:) Operator:</strong> In <code>B2:B20</code>, the colon means "THROUGH". It represents the entire contiguous range from cell B2 down to cell B20.</p></div>
          <div id="quiz-excel-4"></div>`,
        quiz: {
          question:
            "Which formula calculates the average score for student grades in cells E2 through E25?",
          options: [
            "=MEAN(E2:E25)",
            "=AVERAGE(E2:E25)",
            "=AVG(E2..E25)",
            "=DIVIDE(E2:E25)",
          ],
          correct: 1,
          explanation:
            "The official Excel function is <strong>=AVERAGE(E2:E25)</strong>.",
        },
      },
      {
        id: "excel-5",
        title: "The Logical IF Function",
        xp: 25,
        checklist: [
          "Understand IF(condition, value_if_true, value_if_false)",
          "Create pass/fail indicators",
          "Nest IF functions for letter grades",
        ],
        content: `
          <div class="lesson-section">
            <h3>Automating Decisions with IF 🤔</h3>
            <p>The <strong>IF function</strong> tests whether a condition is true or false, and displays different outcomes accordingly.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Syntax Breakdown</span></div>
            <pre>=IF(test_condition, value_if_true, value_if_false)

<span class="comment"># Examples:</span>
=IF(D2 >= 70, "Pass", "Fail")
=IF(F2 > 1000, "High Commission", "Standard")
=IF(B2 = "Yes", 50, 0)</pre>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Nested IF (Multiple Brackets)</div>
            <p>To assign letter grades based on scores in cell A2:<br>
            <code>=IF(A2&gt;=90, "A", IF(A2&gt;=80, "B", IF(A2&gt;=70, "C", "F")))</code><br>
            Excel checks 90 first; if not, checks 80; if not, checks 70; otherwise returns "F"!</p>
          </div>
          <div id="quiz-excel-5"></div>`,
        quiz: {
          question:
            'What does =IF(C2 >= 100, "Bonus", "None") return if cell C2 contains 150?',
          options: ['"None"', '"Bonus"', "150", "TRUE"],
          correct: 1,
          explanation:
            'Since 150 is greater than or equal to 100, the condition is TRUE, so Excel displays the true outcome: <strong>"Bonus"</strong>.',
        },
      },
      {
        id: "excel-6",
        title: "Lookup Magic: VLOOKUP & XLOOKUP",
        xp: 30,
        checklist: [
          "Understand vertical lookups",
          "Use VLOOKUP with exact match FALSE",
          "Explore modern XLOOKUP syntax",
        ],
        content: `
          <div class="lesson-section">
            <h3>Searching Across Tables Automatically 🔍</h3>
            <p>Imagine typing an Employee ID and having Excel automatically fill in their Name, Department, and Salary. That is what lookup functions do!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">VLOOKUP Anatomy</span></div>
            <pre>=VLOOKUP(lookup_value, table_range, col_index_number, [exact_match])

<span class="comment"># Example: Look up Product ID in cell A2 from catalog table in E2:G100</span>
=VLOOKUP(A2, E2:G100, 3, FALSE)</pre>
          </div>
          <div class="code-explanation">
            <h4>What Each Part Means:</h4>
            <div class="code-line-explain"><span class="line-num">A2</span><span class="line-desc"><strong>What to search for:</strong> The item code you want to look up.</span></div>
            <div class="code-line-explain"><span class="line-num">E2:G100</span><span class="line-desc"><strong>Where to search:</strong> The table range (search column MUST be the first column!).</span></div>
            <div class="code-line-explain"><span class="line-num">3</span><span class="line-desc"><strong>Which column to return:</strong> Column 3 of the selected table (e.g. Price).</span></div>
            <div class="code-line-explain"><span class="line-num">FALSE</span><span class="line-desc"><strong>Exact match:</strong> Always use FALSE (or 0) so Excel only returns exact matches!</span></div>
          </div>
          <div id="quiz-excel-6"></div>`,
        quiz: {
          question:
            "Why should you almost always set the 4th argument of VLOOKUP to FALSE?",
          options: [
            "It turns off calculation errors",
            "It demands an EXACT match so Excel does not return the wrong row",
            "It sorts the table automatically",
            "It makes VLOOKUP run faster",
          ],
          correct: 1,
          explanation:
            "Setting the fourth argument to <strong>FALSE</strong> ensures an exact match. If set to TRUE, Excel might guess an approximate match and return completely incorrect data!",
        },
      },
      {
        id: "excel-7",
        title: "Sorting, AutoFilter & Tables (Ctrl+T)",
        xp: 25,
        checklist: [
          "Convert raw data into an official Excel Table with Ctrl+T",
          "Sort alphabetically and by value",
          "Filter specific records with dropdown arrows",
        ],
        content: `
          <div class="lesson-section">
            <h3>Taming Massive Lists of Data 🧹</h3>
            <p>When you have hundreds or thousands of rows, you need instant tools to filter by criteria and sort from highest to lowest.</p>
          </div>
          <div class="lesson-section">
            <h3>The Magic of Excel Tables (Ctrl+T)</h3>
            <p>Highlight any range of data and press <strong>Ctrl+T</strong>. It converts raw cells into an official Excel Table with:</p>
            <ul>
              <li>🎨 Automatic zebra row banding for readability.</li>
              <li>🔽 Filter dropdown arrows on every column header.</li>
              <li>⚡ Calculated columns: write a formula once and it fills the entire column automatically!</li>
              <li>📊 Total Row: toggles one-click sums and averages at the bottom.</li>
            </ul>
          </div>
          <div id="quiz-excel-7"></div>`,
        quiz: {
          question:
            "What is the keyboard shortcut to convert a highlighted range of data into an official Excel Table?",
          options: ["Ctrl+E", "Ctrl+T", "Ctrl+F", "Alt+T"],
          correct: 1,
          explanation:
            "Pressing <strong>Ctrl+T</strong> (or Ctrl+L) instantly converts raw cells into a formatted, filterable Excel Table.",
        },
      },
      {
        id: "excel-8",
        title: "Conditional Formatting & Visual Charts",
        xp: 25,
        checklist: [
          "Highlight top performers with color rules",
          "Use data bars for miniature in-cell charts",
          "Insert Column, Bar, and Pie charts",
        ],
        content: `
          <div class="lesson-section">
            <h3>Visual Storytelling with Data 📈</h3>
            <p>Humans digest visual patterns 60,000 times faster than raw numbers. Excel lets you add visual cues directly into cells and generate presentation-ready charts.</p>
          </div>
          <div class="lesson-section">
            <h3>1. Conditional Formatting</h3>
            <p>Automatically changes cell colors based on values:</p>
            <ul>
              <li>🟢 <strong>Highlight Rules:</strong> Color cells green if score &gt; 80, red if &lt; 50.</li>
              <li>📊 <strong>Data Bars:</strong> Draws miniature horizontal bar graphs directly inside each cell!</li>
              <li>🌈 <strong>Color Scales:</strong> Heat maps (green for high revenue, red for low).</li>
            </ul>
          </div>
          <div class="lesson-section">
            <h3>2. Choosing the Right Chart</h3>
            <ul>
              <li>📊 <strong>Column / Bar Chart:</strong> Comparing categories (e.g. Sales by Department).</li>
              <li>📈 <strong>Line Chart:</strong> Tracking trends over time (e.g. Monthly Revenue over 12 months).</li>
              <li>🥧 <strong>Pie Chart:</strong> Proportions of a whole (use only for 5 or fewer slices!).</li>
            </ul>
          </div>
          <div id="quiz-excel-8"></div>`,
        quiz: {
          question:
            "Which chart type is best for showing how sales numbers have trended over the past 12 months?",
          options: ["Pie chart", "Line chart", "Radar chart", "Scatter plot"],
          correct: 1,
          explanation:
            "A <strong>Line chart</strong> is the gold standard for tracking and visualizing data trends over continuous intervals of time (days, months, years).",
        },
      },
      {
        id: "excel-9",
        title: "Excel Reporting: Tables & Charts",
        xp: 45,
        checklist: [
          "Review workbook structure and formatting",
          "Organize data with Excel Tables",
          "Choose charts that communicate data clearly",
        ],
        content: `
          <div class="lesson-section">
            <h3>Turn Spreadsheet Data into Clear Reports 📊</h3>
            <p>Use Excel Tables to keep lists organized and filterable. Then choose a chart that makes the pattern in your data easy to understand.</p>
            <ul>
              <li><strong>Tables:</strong> Select a data range and press <code>Ctrl+T</code> to add headers, filters, and automatic table expansion.</li>
              <li><strong>Column or bar charts:</strong> Compare categories such as sales by department.</li>
              <li><strong>Line charts:</strong> Show how a value changes over time.</li>
              <li><strong>Pie charts:</strong> Show a small number of parts that make up one whole.</li>
            </ul>
          </div>
          `,
      },
      {
        id: "excel-10",
        title: "Hands-On Capstone: Excel Sales Report",
        xp: 40,
        checklist: [
          "Use IF to compare sales against monthly targets",
          "Use SUM to calculate total sales",
          "Submit both formula challenges in the practice worksheet",
        ],
        content: `
          <div class="lesson-section">
            <h3>Build a Sales Report from Real Spreadsheet Skills 📊</h3>
            <p>Bring together the Excel skills from this topic. In the hands-on worksheet, you'll compare each month's sales to its target with <code>IF</code>, then calculate total sales with <code>SUM</code>.</p>
            <p>Choose each challenge, enter your formula, and press <strong>Calculate</strong>. Your correct and incorrect attempts are saved when you are signed in.</p>
          </div>
          <div id="quiz-excel-10"></div>
          <div id="spreadsheet-practice-excel-10"></div>`,
        quiz: {
          question: "Which Excel function can compare a month's sales with its target and return different text for each outcome?",
          options: ["SUM", "IF", "COUNT", "MAX"],
          correct: 1,
          explanation: "The IF function checks a condition and returns one value when it is true and another when it is false.",
        },
      },
      {
        id: "excel-11",
        title: "Hands-On VLOOKUP: Find an Employee Department",
        xp: 35,
        checklist: [
          "Choose an employee ID to look up",
          "Use VLOOKUP with the employee table",
          "Return an exact-match department result",
        ],
        content: `
          <div class="lesson-section">
            <h3>Find Matching Data with VLOOKUP 🔎</h3>
            <p><strong>VLOOKUP</strong> searches vertically down the first column of a table, then returns a value from another column on the matching row.</p>
            <p>The formula pattern is <code>=VLOOKUP(lookup_value, table_range, column_number, FALSE)</code>. Use <code>FALSE</code> to require an exact match. The lookup value must be in the first column of the selected table range.</p>
            <p>In the worksheet below, enter a VLOOKUP formula to find the department for employee ID <strong>104</strong>. Submit an answer before moving to the next topic; an incorrect answer counts as an attempt and you can retry.</p>
          </div>
          <div id="spreadsheet-practice-excel-11"></div>
          <div class="success-card">
            <div class="suc-icon">🏆</div>
            <p><strong>Excel Specialist Final Quiz:</strong> After completing the VLOOKUP hands-on task, answer the final topic review below.</p>
          </div>
          <div id="multi-quiz-excel-11" class="hidden"></div>`,
        requiresPracticeCompletion: true,
        quizzes: [
          {
            question: "What does the dollar sign ($) in a cell reference like $B$5 accomplish?",
            options: [
              "Formats the cell as US Dollars",
              "Locks the column and row so the reference remains fixed when copying or dragging formulas",
              "Multiplies the cell by 100",
              "Hides the cell from viewers",
            ],
            correct: 1,
            explanation: "The $ character locks the column and row coordinates, creating an absolute reference that does not shift when copied.",
          },
          {
            question: "Which formula calculates the total sum of all values in the range B2 to B15?",
            options: ["=ADD(B2:B15)", "=SUM(B2:B15)", "=TOTAL(B2..B15)", "=B2+B15"],
            correct: 1,
            explanation: "=SUM(B2:B15) adds all numeric values within the specified range.",
          },
          {
            question: "What does FALSE specify in =VLOOKUP(A2,D2:E4,2,FALSE)?",
            options: [
              "Return the first row whether or not it matches",
              "Find an exact match for the lookup value",
              "Search the table from right to left",
              "Return the second matching row",
            ],
            correct: 1,
            explanation: "FALSE requests an exact match, helping prevent a result from a different employee ID.",
          },
          {
            question: "What feature automatically colors cells based on a rule, such as highlighting values below zero?",
            options: ["AutoFormat", "Conditional Formatting", "Color Theme Wizard", "Cell Styles Palette"],
            correct: 1,
            explanation: "Conditional Formatting changes cell appearance dynamically when values meet specified rules.",
          },
          {
            question: "Which chart is best for showing how sales change over 12 months?",
            options: ["Pie chart", "Line chart", "Radar chart", "Scatter plot"],
            correct: 1,
            explanation: "A line chart is well suited to showing changes and trends over time.",
          },
        ],
      },
    ],
  },
  {
    id: "google-sheets",
    name: "Google Sheets",
    emoji: "📈",
    color: "#065f46",
    gradient: "linear-gradient(135deg, #0f9d58, #0b8043)",
    description:
      "Collaborate in real-time, build cloud dashboards, and automate workflows",
    lessons: [
      {
        id: "sheets-1",
        title: "Introduction to Cloud Spreadsheets",
        xp: 10,
        checklist: [
          "Access Google Sheets in the browser",
          "Understand real-time autosave to Google Drive",
          "Compare Sheets vs Excel strengths",
        ],
        content: `
          <div class="lesson-section">
            <h3>Spreadsheets Everywhere ☁️</h3>
            <p><strong>Google Sheets</strong> is a free, web-based spreadsheet program that lives entirely in your browser. Every change you make is saved instantly to Google Drive — you never need to press Ctrl+S again!</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Living Whiteboard</div>
            <p>If desktop Excel is a <strong>private notebook</strong> on your desk, Google Sheets is a <strong>giant whiteboard in the office hallway</strong>: ten teammates from New York, London, and Tokyo can all pick up a marker and write on it simultaneously, seeing each other's colored cursors moving in real time!</p>
          </div>
          <div class="lesson-section">
            <h3>Why Teams Love Google Sheets:</h3>
            <ul>
              <li>👥 <strong>Simultaneous Collaboration:</strong> Work on the same sheet with dozens of colleagues at once.</li>
              <li>💾 <strong>100% Cloud Autosave:</strong> Your computer crashes? No problem — every keystroke is already saved.</li>
              <li>🌐 <strong>Cross-Platform:</strong> Works flawlessly on Windows, Mac, Linux, Chromebooks, iPhones, and Android.</li>
              <li>🔗 <strong>Web-Native:</strong> Easily embed sheets into websites, Google Docs, and Google Slides.</li>
            </ul>
          </div>
          <div id="quiz-sheets-1"></div>`,
        quiz: {
          question: "How is your work saved in Google Sheets?",
          options: [
            "You must manually click File > Save every 5 minutes",
            "Every single edit is automatically saved in real-time to Google Drive",
            "It only saves when you close the tab",
            "It saves to your computer hard drive in Downloads",
          ],
          correct: 1,
          explanation:
            "Google Sheets features <strong>continuous real-time cloud autosave</strong> to Google Drive, ensuring you never lose work.",
        },
      },
      {
        id: "sheets-2",
        title: "Essential Formulas: SUMIF, COUNTIF & UNIQUE",
        xp: 20,
        checklist: [
          "Use conditional sums with SUMIF",
          "Count occurrences with COUNTIF",
          "Extract distinct values with UNIQUE",
        ],
        content: `
          <div class="lesson-section">
            <h3>Conditional Calculations 🎯</h3>
            <p>Standard SUM adds everything. <strong>SUMIF</strong> and <strong>COUNTIF</strong> let you calculate only the cells that match specific criteria.</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Conditional Functions</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment"># Sum only sales from the "West" region (column A) with amounts in column B:</span>
=SUMIF(A2:A50, "West", B2:B50)

<span class="comment"># Count how many orders are "Completed":</span>
=COUNTIF(C2:C100, "Completed")

<span class="comment"># Extract unique customer names (eliminating duplicates):</span>
=UNIQUE(A2:A100)</pre>
          </div>
          <div class="tip-card"><div class="tip-icon">✨</div><p><strong>The UNIQUE function superpower:</strong> In Excel (legacy), extracting unique items requires advanced filters or PivotTables. In Google Sheets, <code>=UNIQUE(range)</code> spills a clean, deduplicated list instantly!</p></div>
          <div id="quiz-sheets-2"></div>`,
        quiz: {
          question:
            'Which formula counts how many times the word "Approved" appears in cells D2 through D50?',
          options: [
            '=SUMIF(D2:D50, "Approved")',
            '=COUNTIF(D2:D50, "Approved")',
            '=COUNT(D2:D50, "Approved")',
            '=MATCH(D2:D50, "Approved")',
          ],
          correct: 1,
          explanation:
            "<strong>=COUNTIF(range, criteria)</strong> tallies the number of cells within a range that meet the given criteria.",
        },
      },
      {
        id: "sheets-3",
        title: "Data Validation & Dropdown Menus",
        xp: 20,
        checklist: [
          "Create in-cell dropdown menus",
          "Add colored chips for status tracking",
          "Insert interactive checkboxes",
        ],
        content: `
          <div class="lesson-section">
            <h3>Guiding Clean Data Input 🔽</h3>
            <p>When multiple people enter data, typos happen (e.g. "Pending", "pending", "Pendng"). <strong>Data Validation</strong> forces collaborators to choose from predefined dropdown options.</p>
          </div>
          <div class="lesson-section">
            <h3>How to Add Dropdowns & Checkboxes:</h3>
            <ol style="padding-left:22px;line-height:2.2;">
              <li>Select the cells you want to restrict (e.g. Status column).</li>
              <li>Click <strong>Insert → Dropdown</strong> (or Data → Data validation).</li>
              <li>Add your options: "Not Started", "In Progress", "Done".</li>
              <li>Pick colors for each chip (e.g. Green for Done, Yellow for In Progress).</li>
              <li>Or click <strong>Insert → Checkbox</strong> for instant interactive checklist boxes!</li>
            </ol>
          </div>
          <div id="quiz-sheets-3"></div>`,
        quiz: {
          question:
            "Why is Data Validation (Dropdowns) valuable in shared spreadsheets?",
          options: [
            "It encrypts the cells with a password",
            "It prevents typos and ensures consistent, standardized data entry across the team",
            "It hides rows from unauthorized users",
            "It converts the file to PDF",
          ],
          correct: 1,
          explanation:
            "<strong>Data Validation</strong> restricts cell input to predefined options, ensuring clean, typo-free data for accurate reporting.",
        },
      },
      {
        id: "sheets-4",
        title: "Filter Views: Filtering Without Disrupting Others",
        xp: 25,
        checklist: [
          "Understand the disaster of standard filtering in team sheets",
          "Create personal Filter Views",
          "Save named views for teammates",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Teamwork Golden Rule 🛡️</h3>
            <p>If you use a standard filter on a shared Google Sheet, <strong>everyone else on the sheet sees their view change too!</strong> You might hide rows a teammate was actively typing on.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 The Filter View Solution</div>
            <p>A <strong>Filter View</strong> is like putting on a pair of <strong>sunglasses</strong>. You see only the data you filtered (e.g. "Only my tasks"), but everyone else continues looking at the regular sheet completely undisturbed!</p>
          </div>
          <div class="lesson-section">
            <h3>How to Create a Filter View:</h3>
            <p>Click <strong>Data → Filter views → Create new filter view</strong>. A dark border appears around the sheet headers, indicating you are safely in your own personal view!</p>
          </div>
          <div id="quiz-sheets-4"></div>`,
        quiz: {
          question:
            'What is the main benefit of a "Filter View" compared to a normal Filter in a shared Google Sheet?',
          options: [
            "It calculates formulas 50% faster",
            "It lets you filter and sort data without changing or disrupting what other collaborators see",
            "It allows offline editing",
            "It deletes duplicate rows automatically",
          ],
          correct: 1,
          explanation:
            "<strong>Filter Views</strong> allow individuals to sort and filter data privately without affecting the view of other people viewing the sheet.",
        },
      },
      {
        id: "sheets-5",
        title: "Sharing, Permissions & Version History",
        xp: 20,
        checklist: [
          "Share with specific emails or link",
          "Understand Viewer, Commenter, and Editor roles",
          "Restore past versions with Version History",
        ],
        content: `
          <div class="lesson-section">
            <h3>Collaborating Safely 👥</h3>
            <p>Google Sheets gives you granular control over who can see or edit your data, and keeps a complete audit trail of every change ever made.</p>
          </div>
          <div class="lesson-section">
            <h3>The 3 Permission Levels:</h3>
            <ul>
              <li>👁️ <strong>Viewer:</strong> Can read and copy data, but cannot edit or leave notes.</li>
              <li>💬 <strong>Commenter:</strong> Can view data and highlight cells to leave feedback comments, but cannot edit cell values.</li>
              <li>✏️ <strong>Editor:</strong> Has full permission to change cells, formulas, and formatting.</li>
            </ul>
          </div>
          <div class="tip-card"><div class="tip-icon">⏳</div><p><strong>Version History (Ctrl+Alt+Shift+H):</strong> Ever had someone accidentally delete half your formulas? Go to <strong>File → Version history → See version history</strong>. You can see who made each edit, click any timestamp in the past, and hit <strong>"Restore this version"</strong>!</p></div>
          <div id="quiz-sheets-5"></div>`,
        quiz: {
          question:
            "How can you undo an accidental deletion that happened days ago in a shared Google Sheet?",
          options: [
            "It is impossible to recover",
            "Press Ctrl+Z 10,000 times",
            "Open File > Version history and restore the snapshot from before the mistake occurred",
            "Email Google customer support",
          ],
          correct: 2,
          explanation:
            "Google Sheets records continuous <strong>Version History</strong>, allowing owners to view and restore any past state with a single click.",
        },
      },
      {
        id: "sheets-6",
        title: "IMPORTRANGE: Connecting Multiple Sheets",
        xp: 25,
        checklist: [
          "Link external spreadsheets together",
          "Use the IMPORTRANGE formula",
          "Grant cross-sheet data access permissions",
        ],
        content: `
          <div class="lesson-section">
            <h3>Live Data Feeds Between Workbooks 🔗</h3>
            <p>What if your Sales team has a confidential pipeline sheet, but you want to display their daily total on a company-wide dashboard without sharing the raw sales sheet? Use <strong>IMPORTRANGE</strong>!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">IMPORTRANGE Syntax</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre>=IMPORTRANGE("spreadsheet_url_or_key", "SheetName!Range")

<span class="comment"># Example:</span>
=IMPORTRANGE("https://docs.google.com/spreadsheets/d/1BxiMVs0XRA...", "Q1_Sales!A1:E20")</pre>
          </div>
          <div class="info-box"><div class="info-icon">🔐</div><p><strong>One-Time Permission:</strong> The first time you write this formula, cell displays <code>#REF!</code> with a blue button: <strong>"Allow access"</strong>. Click it once, and the sheets remain linked forever with live real-time sync!</p></div>
          <div id="quiz-sheets-6"></div>`,
        quiz: {
          question:
            "Which Google Sheets function imports a live range of cells from an entirely separate spreadsheet file?",
          options: [
            "=IMPORTDATA()",
            "=IMPORTRANGE()",
            "=VLOOKUP_SHEET()",
            "=LINKRANGE()",
          ],
          correct: 1,
          explanation:
            "<strong>=IMPORTRANGE(url, range)</strong> pulls live cell data from an external Google Sheet into your current workbook.",
        },
      },
      {
        id: "sheets-7",
        title: "Google Apps Script: Automating with Code",
        xp: 30,
        checklist: [
          "Open the Apps Script editor from Extensions",
          "Write your first JavaScript function for Sheets",
          "Automate custom workflows",
        ],
        content: `
          <div class="lesson-section">
            <h3>Supercharging Sheets with JavaScript 🤖</h3>
            <p>Every Google Sheet has a built-in code editor powered by modern JavaScript: <strong>Google Apps Script</strong>. You can automate repetitive tasks, send automatic emails when a cell changes, or fetch data from third-party APIs!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Apps Script (Extensions → Apps Script)</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="keyword">function</span> sendWelcomeEmail() {
  <span class="keyword">const</span> sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  <span class="keyword">const</span> email = sheet.getRange(<span class="string">'A2'</span>).getValue();
  <span class="keyword">const</span> name = sheet.getRange(<span class="string">'B2'</span>).getValue();

  MailApp.sendEmail(email, <span class="string">'Welcome to the Team!'</span>, <span class="string">'Hi '</span> + name + <span class="string">', glad to have you!'</span>);
}</pre>
          </div>
          <div class="tip-card"><div class="tip-icon">🚀</div><p>Notice that Apps Script is written in <strong>JavaScript</strong> — the exact same language you learned in Topic 5! Your skills stack together powerfully.</p></div>
          <div id="quiz-sheets-7"></div>`,
        quiz: {
          question:
            "What programming language powers Google Apps Script automations?",
          options: ["Python", "JavaScript", "VBA", "PHP"],
          correct: 1,
          explanation:
            "Google Apps Script is built directly on standard modern <strong>JavaScript</strong>.",
        },
      },
      {
        id: "sheets-8",
        title: "Milestone Project & Multi-Quiz: Monthly Budget",
        xp: 45,
        checklist: [
          "Review cloud spreadsheet collaboration",
          "Review SUMIF, data validation, and filter views",
          "Pass the 4-question Google Sheets Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 8 Capstone: Cloud Spreadsheet Specialist 🏆</h3>
            <p>You have mastered Google Sheets: real-time collaboration, conditional formulas (SUMIF, COUNTIF), data validation, filter views, permissions, IMPORTRANGE, and Apps Script!</p>
          </div>
          <div class="success-card">
            <div class="suc-icon">📈</div>
            <p><strong>Milestone Challenge:</strong> Complete this 4-question quiz to receive your Google Sheets Certified Badge!</p>
          </div>
          <div id="multi-quiz-sheets-8"></div>`,
        quizzes: [
          {
            question:
              "What happens when multiple people edit the same Google Sheet at the same time?",
            options: [
              "The file locks and blocks everyone except one person",
              "All collaborators see each other's colored cursors and live edits simultaneously",
              "The file corrupts and reverts to blank",
              "Edits are queued and saved only at midnight",
            ],
            correct: 1,
            explanation:
              "Google Sheets supports real-time concurrent editing where everyone sees edits and cursor movements instantaneously.",
          },
          {
            question:
              "Which permission level allows someone to highlight cells and post questions or suggestions without altering cell values?",
            options: ["Viewer", "Commenter", "Editor", "Owner"],
            correct: 1,
            explanation:
              "<strong>Commenter</strong> permission enables users to view and add threaded comments and suggestions without modifying data.",
          },
          {
            question:
              "How do you filter a busy shared sheet without changing what your coworkers see on their screens?",
            options: [
              "Download the sheet as Excel",
              "Use Data > Filter Views > Create new filter view",
              "Hide all the rows manually",
              "Ask everyone to log off",
            ],
            correct: 1,
            explanation:
              "<strong>Filter Views</strong> isolate sorting and filtering to your personal screen only.",
          },
          {
            question:
              "What function eliminates duplicate rows and returns a unique list of items in Google Sheets?",
            options: ["=DEDUPE()", "=UNIQUE()", "=DISTINCT()", "=CLEAN()"],
            correct: 1,
            explanation:
              "<strong>=UNIQUE(range)</strong> extracts an array of distinct items from the given range.",
          },
        ],
      },
      {
        id: "sheets-9",
        title: "Hands-On Capstone: Google Sheets Budget Analysis",
        xp: 40,
        checklist: [
          "Use SUMIF to total expenses in a chosen category",
          "Use COUNTIF to count expenses with a matching status",
          "Submit both formula challenges in the practice worksheet",
        ],
        content: `
          <div class="lesson-section">
            <h3>Analyze a Shared Expense Sheet ☁️</h3>
            <p>Use the Google Sheets formulas from this topic to summarize a sample expense list. First total the <strong>Supplies</strong> category with <code>SUMIF</code>, then count <strong>Paid</strong> expenses with <code>COUNTIF</code>.</p>
            <p>Choose each challenge, enter your formula, and press <strong>Calculate</strong>. Your correct and incorrect attempts are saved when you are signed in.</p>
          </div>
          <div id="quiz-sheets-9"></div>
          <div id="spreadsheet-practice-sheets-9"></div>`,
        quiz: {
          question: "Which Google Sheets function totals values only for rows matching a category?",
          options: ["COUNTIF", "UNIQUE", "SUMIF", "IMPORTRANGE"],
          correct: 2,
          explanation: "SUMIF checks a criteria range and adds the matching values from the sum range.",
        },
      },
    ],
  },
  {
    id: "vscode",
    name: "VS Code",
    emoji: "💻",
    color: "#1d4ed8",
    gradient: "linear-gradient(135deg, #007acc, #005a9e)",
    description:
      "Master Visual Studio Code — the undisputed #1 code editor in the software industry",
    lessons: [
      {
        id: "vscode-1",
        title: "What is VS Code?",
        xp: 10,
        checklist: [
          "Learn why VS Code is the industry standard",
          "Understand the 5 primary interface zones",
          "Pick your editor theme",
        ],
        content: `
          <div class="lesson-section">
            <h3>Your Coding Headquarters 💻</h3>
            <p><strong>Visual Studio Code</strong> (VS Code) is a free, blazing-fast, open-source code editor created by Microsoft. It is by far the most popular development environment in the world.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Craftsman\'s Workbench</div>
            <p>A good carpenter doesn't just need wood and nails — they need an organized workbench with chisels, measuring tapes, saws, and vices within arm\'s reach. VS Code is your <strong>digital workbench</strong>: code editor, terminal, Git version control, debugger, and extensions all in one screen!</p>
          </div>
          <div class="lesson-section">
            <h3>The 5 Interface Zones:</h3>
            <ul>
              <li>📂 <strong>Primary Sidebar / Explorer:</strong> Your project file tree and folder structure.</li>
              <li>📝 <strong>Editor Area:</strong> Where you write and edit your HTML, CSS, JavaScript, and TypeScript files.</li>
              <li>⚡ <strong>Activity Bar (Far Left):</strong> Icons to jump between Explorer, Search, Source Control (Git), Run/Debug, and Extensions.</li>
              <li>🖥️ <strong>Bottom Panel:</strong> Integrated terminal, output logs, problems, and debug console.</li>
              <li>📏 <strong>Status Bar (Bottom):</strong> Current Git branch, language mode, line/column numbers, and notification alerts.</li>
            </ul>
          </div>
          <div id="quiz-vscode-1"></div>`,
        quiz: {
          question: "What is Visual Studio Code (VS Code)?",
          options: [
            "A commercial web browser",
            "A free, open-source, extensible code editor developed by Microsoft",
            "A programming language like Python",
            "An operating system",
          ],
          correct: 1,
          explanation:
            "VS Code is Microsoft's free, open-source, highly customizable code editor used by millions of software developers.",
        },
      },
      {
        id: "vscode-2",
        title: "Projects, Folders & File Management",
        xp: 15,
        checklist: [
          "Open projects using File > Open Folder",
          "Learn clean project directory conventions",
          "Create files and folders from the Explorer",
        ],
        content: `
          <div class="lesson-section">
            <h3>The Cardinal Rule: Always Open a FOLDER 📁</h3>
            <p>Beginners often open a single loose file (e.g. <code>index.html</code>). In VS Code, you should <strong>always open the entire project folder</strong> (<code>File → Open Folder...</code>). This gives VS Code the full context of your project for autocomplete and search.</p>
          </div>
          <div class="lesson-section">
            <h3>Standard Web Project Structure</h3>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Recommended Folder Structure</span></div>
              <pre>my-portfolio/
├── index.html        <span class="comment"># Main landing page</span>
├── style.css         <span class="comment"># Global stylesheets</span>
├── app.js            <span class="comment"># Application logic</span>
├── assets/           <span class="comment"># Images, icons, fonts</span>
│   ├── images/
│   └── icons/
└── README.md         <span class="comment"># Project overview</span></pre>
            </div>
          </div>
          <div class="tip-card"><div class="tip-icon">✨</div><p><strong>Explorer Shortcuts:</strong> Hover over your project title in the Explorer sidebar to reveal the "New File" and "New Folder" icons for instant file creation without touching your computer's file explorer!</p></div>
          <div id="quiz-vscode-2"></div>`,
        quiz: {
          question:
            "Why should you open an entire project folder in VS Code rather than just opening an individual file?",
          options: [
            "It increases computer RAM",
            "It gives VS Code full workspace context for autocomplete, multi-file search, terminal navigation, and Git tracking",
            "It prevents files from being edited",
            "It connects directly to the printer",
          ],
          correct: 1,
          explanation:
            "Opening the root folder gives VS Code complete workspace awareness, enabling cross-file refactoring, search, and integrated terminal alignment.",
        },
      },
      {
        id: "vscode-3",
        title: "The Integrated Terminal",
        xp: 20,
        checklist: [
          "Open the terminal with Ctrl + `",
          "Run commands without leaving the editor",
          "Manage multiple terminal tabs",
        ],
        content: `
          <div class="lesson-section">
            <h3>Never Leave Your Editor 🖥️</h3>
            <p>In older editors, developers constantly alt-tabbed back and forth between their code editor and a separate command prompt window. VS Code has an <strong>Integrated Terminal</strong> built right in!</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Terminal Shortcut</span></div>
            <pre>Press: Ctrl + \` (the backtick key, next to the 1 key on your keyboard)
<span class="comment"># (On Mac: Cmd + \`)</span></pre>
          </div>
          <div class="lesson-section">
            <h3>Why the Integrated Terminal is Amazing:</h3>
            <ul>
              <li>🎯 <strong>Auto-Navigated:</strong> The terminal automatically opens <em>already inside your project folder</em>. No typing <code>cd C:\\Users\\...</code>!</li>
              <li>➕ <strong>Multiple Terminals:</strong> Click the <code>+</code> icon on the right to split or run multiple terminals simultaneously (e.g. running a Next.js server in tab 1 while running Git commands in tab 2).</li>
              <li>🐚 <strong>Choose Your Shell:</strong> Easily switch between PowerShell, Command Prompt, Git Bash, or WSL Ubuntu with one click.</li>
            </ul>
          </div>
          <div id="quiz-vscode-3"></div>`,
        quiz: {
          question:
            "What keyboard shortcut toggles the integrated terminal in VS Code on Windows?",
          options: [
            "Ctrl + T",
            "Ctrl + ` (backtick)",
            "Ctrl + Shift + Enter",
            "Alt + F4",
          ],
          correct: 1,
          explanation:
            "<strong>Ctrl + `</strong> (Control plus backtick) instantly opens and hides the integrated terminal.",
        },
      },
      {
        id: "vscode-4",
        title: "Essential Extensions for Web Developers",
        xp: 20,
        checklist: [
          "Install Prettier for auto-formatting",
          "Install Live Server for auto-refresh",
          "Install GitLens for version history",
        ],
        content: `
          <div class="lesson-section">
            <h3>Supercharging Your Editor with Extensions 🔌</h3>
            <p>VS Code starts lightweight, but its massive extension marketplace lets you turn it into a powerhouse customized for your exact stack.</p>
          </div>
          <div class="lesson-section">
            <h3>The Top 5 Must-Have Extensions:</h3>
            <ol style="padding-left:22px;line-height:2.2;">
              <li>🎨 <strong>Prettier:</strong> Automatically cleans up indentations, quotes, and spacing every time you press save (Format on Save).</li>
              <li>🌐 <strong>Live Server:</strong> Launches a local web server with auto-refresh whenever you edit HTML or CSS.</li>
              <li>🐙 <strong>GitLens:</strong> Shows who wrote each line of code and when directly inside your editor.</li>
              <li>🦊 <strong>ESLint:</strong> Flags bad coding patterns and syntax errors in JavaScript before you run them.</li>
              <li>⚡ <strong>Thunder Client:</strong> A lightweight REST API client (like Postman) embedded right in VS Code.</li>
            </ol>
          </div>
          <div class="tip-card"><div class="tip-icon">📦</div><p><strong>How to install:</strong> Press <strong>Ctrl+Shift+X</strong> (or click the 4-squares icon in the Activity Bar), type the extension name, and click <strong>Install</strong>!</p></div>
          <div id="quiz-vscode-4"></div>`,
        quiz: {
          question: 'What does the "Prettier" extension do in VS Code?',
          options: [
            "Finds grammatical spelling errors in English essays",
            "Automatically formats code to look clean, consistent, and standardized with proper indentation",
            "Translates code into other human languages",
            "Creates 3D button animations",
          ],
          correct: 1,
          explanation:
            "<strong>Prettier</strong> is an opinionated code formatter that enforces consistent indentation, spacing, quotes, and line wrapping across projects.",
        },
      },
      {
        id: "vscode-5",
        title: "Power Shortcuts & Multi-Cursor Magic",
        xp: 25,
        checklist: [
          "Use Ctrl+P for instant file jump",
          "Use Ctrl+Shift+P for the Command Palette",
          "Master multi-cursor editing with Alt+Click and Ctrl+D",
        ],
        content: `
          <div class="lesson-section">
            <h3>Coding at Lightning Speed ⚡</h3>
            <p>The difference between a beginner and a senior developer is often fluency with keyboard shortcuts. Mastering these four shortcuts will save you hours every week:</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">Top VS Code Shortcuts</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre><span class="comment"># 1. Quick Open (Jump to any file instantly)</span>
Ctrl + P              <span class="comment"># Type "sty" -> jumps straight to style.css!</span>

<span class="comment"># 2. Command Palette (Search EVERY feature in VS Code)</span>
Ctrl + Shift + P      <span class="comment"># Type "Format Document", "Change Theme", etc.</span>

<span class="comment"># 3. Multi-Cursor Magic (Select next occurrence of word)</span>
Ctrl + D              <span class="comment"># Select a word, press Ctrl+D to select the next one and edit both!</span>

<span class="comment"># 4. Multi-Cursor Click</span>
Alt + Click           <span class="comment"># Place multiple blinking cursors anywhere on the screen!</span>

<span class="comment"># 5. Move Entire Lines Up/Down</span>
Alt + ↑ or ↓          <span class="comment"># Swaps the current line up or down without cutting/pasting!</span></pre>
          </div>
          <div id="quiz-vscode-5"></div>`,
        quiz: {
          question: "What does pressing Ctrl+P do in VS Code?",
          options: [
            "Prints the current file on paper",
            "Opens Quick Open to jump to any file in your project by typing its name",
            "Prompts for a password",
            "Pastes code formatted",
          ],
          correct: 1,
          explanation:
            "<strong>Ctrl+P</strong> opens the Quick Open palette, allowing you to instantly search for and jump to any file in your project.",
        },
      },
      {
        id: "vscode-6",
        title: "IntelliSense & Emmet Abbreviations",
        xp: 25,
        checklist: [
          "Generate complete HTML boilerplate with ! + Tab",
          "Use Emmet shortcuts like ul>li*3",
          "Accept IntelliSense autocomplete with Tab",
        ],
        content: `
          <div class="lesson-section">
            <h3>Type Less, Code More 🪄</h3>
            <p>VS Code comes with <strong>Emmet</strong> and <strong>IntelliSense</strong> built in. You never need to write full HTML tags by hand again!</p>
          </div>
          <div class="lesson-section">
            <h3>The HTML Boilerplate Trick:</h3>
            <p>In a blank <code>index.html</code> file, type a single exclamation mark (<code>!</code>) and press <strong>Tab</strong> (or Enter). VS Code immediately generates the complete HTML5 skeleton:</p>
            <div class="code-block">
              <div class="code-block-header"><span class="code-lang">Emmet Generation</span></div>
              <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            </div>
          </div>
          <div class="lesson-section">
            <h3>Cool Emmet Shortcuts:</h3>
            <ul>
              <li><code>.card</code> + Tab → <code>&lt;div class="card"&gt;&lt;/div&gt;</code></li>
              <li><code>ul&gt;li*4</code> + Tab → Creates an unordered list with 4 list items automatically!</li>
              <li><code>button.btn-primary{Submit}</code> + Tab → <code>&lt;button class="btn-primary"&gt;Submit&lt;/button&gt;</code></li>
            </ul>
          </div>
          <div id="quiz-vscode-6"></div>`,
        quiz: {
          question:
            "In a blank HTML file in VS Code, what abbreviation followed by Tab produces the entire HTML5 starter skeleton?",
          options: ["html5", "! (Exclamation mark)", "skeleton", "doc"],
          correct: 1,
          explanation:
            "Typing <strong>!</strong> and pressing <strong>Tab</strong> activates Emmet's HTML5 boilerplate expansion.",
        },
      },
      {
        id: "vscode-7",
        title: "Built-In Git & Source Control",
        xp: 25,
        checklist: [
          "Open the Source Control sidebar (Ctrl+Shift+G)",
          "Stage and commit files with a visual interface",
          "View line-by-line diffs",
        ],
        content: `
          <div class="lesson-section">
            <h3>Git Without the Command Line 🐙</h3>
            <p>While learning terminal commands is crucial, VS Code provides a stunning graphical interface for Git that makes reviewing your changes effortless.</p>
          </div>
          <div class="lesson-section">
            <h3>The Source Control Panel (Ctrl+Shift+G):</h3>
            <ul>
              <li>🟢 <strong>Changes list:</strong> Shows every file you have added, deleted, or edited.</li>
              <li>👀 <strong>Click any file to see the Diff:</strong> VS Code opens a side-by-side view showing red (deleted code) and green (added code) highlighting your exact edits!</li>
              <li>➕ <strong>The "+" button:</strong> Click the plus sign next to a file to stage it (equivalent to <code>git add</code>).</li>
              <li>✔️ <strong>Commit Message box:</strong> Type your message, click the checkmark, and your commit is saved!</li>
            </ul>
          </div>
          <div id="quiz-vscode-7"></div>`,
        quiz: {
          question:
            "What keyboard shortcut opens the visual Source Control (Git) panel in VS Code?",
          options: [
            "Ctrl + G",
            "Ctrl + Shift + G",
            "Alt + G",
            "Ctrl + Shift + K",
          ],
          correct: 1,
          explanation:
            "<strong>Ctrl + Shift + G</strong> opens the Source Control panel where you can stage, commit, branch, and inspect diffs visually.",
        },
      },
      {
        id: "vscode-8",
        title: "Debugging with Breakpoints",
        xp: 30,
        checklist: [
          "Set breakpoints by clicking the margin",
          "Step through execution with F10 and F11",
          "Inspect live variables without console.log",
        ],
        content: `
          <div class="lesson-section">
            <h3>Hunting Bugs Like a Pro 🐞</h3>
            <p>Most beginners debug by sprinkling 50 <code>console.log()</code> statements everywhere. Professional developers use the <strong>VS Code Debugger</strong>.</p>
          </div>
          <div class="analogy-box">
            <div class="analogy-label">🧠 Analogy: The Pause Button for Time</div>
            <p>Imagine watching a fast-paced movie and pausing it on frame 412 to inspect every item on the table. A <strong>Breakpoint</strong> pauses your JavaScript code at that exact line of execution so you can hover your mouse over variables and see their exact real-time values!</p>
          </div>
          <div class="lesson-section">
            <h3>How to Debug:</h3>
            <ol style="padding-left:22px;line-height:2.2;">
              <li>Click to the left of any line number in your JavaScript file — a <strong>red dot</strong> appears (Breakpoint).</li>
              <li>Press <strong>F5</strong> to start debugging.</li>
              <li>When your code hits that line, execution freezes!</li>
              <li>Look at the <strong>Variables panel</strong> on the left to see all values in memory.</li>
              <li>Press <strong>F10 (Step Over)</strong> to step forward one line at a time!</li>
            </ol>
          </div>
          <div id="quiz-vscode-8"></div>`,
        quiz: {
          question: "What does setting a breakpoint (red dot) in VS Code do?",
          options: [
            "Deletes the line of code",
            "Pauses program execution at that line so you can inspect memory and variables",
            "Speeds up code execution",
            "Marks the code as a favorite",
          ],
          correct: 1,
          explanation:
            "A <strong>breakpoint</strong> pauses execution right before that line runs, allowing you to examine variables and step through logic line-by-line.",
        },
      },
      {
        id: "vscode-9",
        title: "Workspace Settings & .vscode Config",
        xp: 25,
        checklist: [
          "Open settings.json with the command palette",
          'Configure "editor.formatOnSave": true',
          "Commit project settings in .vscode/",
        ],
        content: `
          <div class="lesson-section">
            <h3>Customizing Your Environment ⚙️</h3>
            <p>VS Code settings can be configured visually or directly in JSON. You can configure global settings (for all your projects) or workspace settings (specific to this repository).</p>
          </div>
          <div class="code-block">
            <div class="code-block-header"><span class="code-lang">.vscode/settings.json</span><button class="code-copy-btn" onclick="copyCode(this)"><i class="far fa-copy"></i> Copy</button></div>
            <pre>{
  <span class="string">"editor.formatOnSave"</span>: <span class="keyword">true</span>,
  <span class="string">"editor.defaultFormatter"</span>: <span class="string">"esbenp.prettier-vscode"</span>,
  <span class="string">"editor.tabSize"</span>: 2,
  <span class="string">"files.autoSave"</span>: <span class="string">"onFocusChange"</span>,
  <span class="string">"editor.cursorBlinking"</span>: <span class="string">"smooth"</span>
}</pre>
          </div>
          <div class="tip-card"><div class="tip-icon">⭐</div><p><strong>Format on Save:</strong> Setting <code>"editor.formatOnSave": true</code> means you can type messy, unindented code, press Ctrl+S, and watch Prettier automatically snap everything into pristine alignment instantly!</p></div>
          <div id="quiz-vscode-9"></div>`,
        quiz: {
          question:
            "What setting ensures that code is automatically cleaned and formatted whenever you save a file?",
          options: [
            '"editor.autoClean": true',
            '"editor.formatOnSave": true',
            '"files.cleanOnSave": true',
            '"prettier.runAlways": true',
          ],
          correct: 1,
          explanation:
            '<strong>"editor.formatOnSave": true</strong> triggers your configured formatter (such as Prettier) every time you save a document.',
        },
      },
      {
        id: "vscode-10",
        title: "Milestone Project & Multi-Quiz: Developer Setup",
        xp: 45,
        checklist: [
          "Review interface navigation and terminal shortcuts",
          "Review extensions, Emmet, and debugging",
          "Pass the 4-question VS Code Milestone Quiz",
        ],
        content: `
          <div class="lesson-section">
            <h3>Topic 9 Capstone: Master of the Editor 🏆</h3>
            <p>You have mastered Visual Studio Code: project management, integrated terminal, essential extensions, keyboard shortcuts, Emmet abbreviations, visual Git diffs, debugging with breakpoints, and custom workspace settings!</p>
          </div>
          <div class="success-card">
            <div class="suc-icon">💻</div>
            <p><strong>Milestone Challenge:</strong> Complete this 4-question quiz to receive your VS Code Power User Certificate!</p>
          </div>
          <div id="multi-quiz-vscode-10"></div>`,
        quizzes: [
          {
            question:
              "What is the most powerful master shortcut in VS Code that opens a searchable list of EVERY command and feature in the editor?",
            options: [
              "Ctrl + P",
              "Ctrl + Shift + P (Command Palette)",
              "Ctrl + Alt + Del",
              "Ctrl + F",
            ],
            correct: 1,
            explanation:
              "<strong>Ctrl + Shift + P</strong> opens the Command Palette, giving instant searchable access to every tool and setting in VS Code.",
          },
          {
            question:
              "What does the Emmet abbreviation ul>li*3 generate when followed by Tab in an HTML file?",
            options: [
              "A link to 3 websites",
              "An unordered list containing 3 list item tags (<ul><li></li><li></li><li></li></ul>)",
              "A paragraph with 3 lines of text",
              "An error",
            ],
            correct: 1,
            explanation:
              "<code>ul&gt;li*3</code> expands into a <code>&lt;ul&gt;</code> containing three <code>&lt;li&gt;</code> tags.",
          },
          {
            question:
              "Where can you run npm, git, and build commands directly inside VS Code without switching windows?",
            options: [
              "The integrated terminal (Ctrl + `)",
              "The search panel",
              "The status bar",
              "The settings menu",
            ],
            correct: 0,
            explanation:
              "The <strong>Integrated Terminal</strong> allows developers to run command-line tools without leaving the editor window.",
          },
          {
            question:
              "How do you place multiple cursors to edit multiple locations at once in VS Code?",
            options: [
              "Hold Shift and drag",
              "Hold Alt and click multiple locations on screen",
              'Right click and select "Duplicate"',
              "Press F2 repeatedly",
            ],
            correct: 1,
            explanation:
              "Holding <strong>Alt</strong> and clicking anywhere on the screen creates simultaneous multi-cursors for concurrent editing.",
          },
        ],
      },
    ],
  },
];
