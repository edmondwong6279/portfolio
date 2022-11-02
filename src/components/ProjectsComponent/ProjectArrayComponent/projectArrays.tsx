export type projectType = {
  title: string;
  image: string;
  description: JSX.Element;
  link: string;
  tags: string[];
};

export const workArray: projectType[] = [
  {
    title: "xenonarc",
    image: "/images/projects/xenon.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          Worked in a team to build the xenonarc website. My responsibilities
          were animating the background and logo on the front page. As the
          project moved on, I contributed further by bug fixing.
        </p>
        {/* Libraries used */}
        <p>The background and logo were animated using framer on SVGs.</p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>Gain experience in working in a team with a large client.</li>
          <li>
            Produce code that was being delivered on an real client project.
          </li>
        </ul>
      </>
    ),
    link: "https://xenonarc.com/",
    tags: ["framer-motion", "SVG", "team project"],
  },
  {
    title: "Shoe Generator",
    image: "/images/projects/shoes.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          This passion project utilised my knowledge in machine learning to
          produce an image generator for shoes. The implementation gives the
          user the options to refine strange and wonderful designs, all in a
          simple and clear UI.
        </p>
        {/* Libraries used */}
        <p>
          The model used was{" "}
          <a
            href={"https://github.com/NVlabs/stylegan2-ada-pytorch"}
            target={"_blank"}
          >
            StyleGAN2-ADA
          </a>{" "}
          because we only had a few thousand images to train on, each of which
          was 256 pixels squared. The model is loaded in and images are produced
          via built in nextjs API calls. We also allowed for social media
          sharing with each unique shoe, keeping the image in the metadata using
          opengraph. The fun animations were implemented using framer.
        </p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>
            Deploy a pretrained machine learning model on a nextjs project.
          </li>
          <li>Embed data that is used to generate each shoe.</li>
        </ul>
      </>
    ),
    link: "https://shoegen.universlabs.co.uk/",
    tags: [
      "python",
      "machine learning",
      "nodejs",
      "nextjs",
      "framer",
      "solo project",
    ],
  },
  {
    title: "Rhinostics ROI Calculator",
    image: "/images/projects/rhino.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          In this project, the user inputs information in a form and receives a
          custom page based on their answers in the form.
        </p>
        {/* Libraries used */}
        <p>This was a fairly basic project that.</p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>
            Work efficiently and quickly on the project in a relatively small
            time scale.
          </li>
        </ul>
      </>
    ),
    link: "https://rhinostics.com/roi/",
    tags: ["data visualisation", "team project"],
  },
  {
    title: "Balderton Benchmark Tool",
    image: "/images/projects/bald.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          This project fetches predefined data and displays it in either a box
          plot, line graph or a bar chart. Lots of different data presented a
          challenge to how we could cleanly code this.
        </p>
        {/* Libraries used */}
        <p>The graphs were implemented using SVG.</p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>
            Create a fluid experience where data visualisation that seamlessly
            switches between graph types.
          </li>
          <li>
            Create custom slider component that allows for a pleasent and
            intuitive UX.
          </li>
          <li>
            Worked closely with the 1 other developer in this team to produce a
            clean and well performing implementation of this data visualisation
            project.
          </li>
        </ul>
      </>
    ),
    link: "#",
    tags: ["data visualisation", "SVG", "team project"],
  },
];

export const personalArray: projectType[] = [
  {
    title: "Covid Data Visualisation",
    image: "/images/projects/covid.gif",
    description: (
      <>
        <p>
          Fetched data from this{" "}
          <a
            href={"https://github.com/CSSEGISandData/COVID-19"}
            target={"_blank"}
          >
            git repository
          </a>{" "}
          and plotted a line graph of deaths from COVID-19. Allows the user to
          specify any country and any time period that is in the data.
        </p>
        <p>
          Used d3 to help calculate the axes scale and plotted using SVG. Used
          framer-motion to animate the loading in and out animations.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>Learn to scrape data from csv data using fetch.</li>
          <li>
            Use d3 (specfically d3 scale) to calculate mouse positions to allow
            for the hover tooltip.
          </li>
          <li>
            Make a simple loading animation while data was fetched and
            processed.
          </li>
          <li>Use framer motion to load in and out the line plot.</li>
        </ul>
      </>
    ),

    link: "google.com",
    tags: [
      "d3",
      "fetch API",
      "SVG",
      "framer-motion",
      "data visualisation",
      "solo project",
    ],
  },
  {
    title: "Let The Words Out",
    image: "/images/projects/ltwo.gif",
    description: (
      <>
        <p>
          Worked with a local band to create a promotional webpage. The user
          types any phrase and is returned with the amount of times other users
          have used each word in the database.
        </p>
        <p>
          Initial data was scraped via a python reddit scraper and was developed
          with React, canvas, matter-js, d3 and integrated with a PostgreSQL
          database using knex.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Work effectively with a client to ensure their needs were met
            regarding functionality and design.
          </li>
          <li>
            Utilise matter-js to simulate the physics of the bubbles, rendering
            using canvas.
          </li>
          <li>
            Learn how to use Knex to connect to a PostgreSQL database and
            perform simple transactions.
          </li>
        </ul>
      </>
    ),
    link: "https://letthewordsout.com/",
    tags: ["canvas", "matter-js", "d3", "SQL", "PostgreSQL", "solo project"],
  },
  {
    title: "Bacon Snakes",
    image: "/images/projects/snake.gif",
    description: (
      <>
        <p>
          Recreated the simple game of snake- but with bacon. Nothing serious,
          just a bit of fun! Uses keyboard input for movement, and tracks high
          scores. Also allows for a rudimentary muiltiplayer by using websockets
          (coming soon).
        </p>
        <p>
          Recreated the simple game of snake- but with bacon. Nothing serious,
          just a bit of fun! Uses keyboard input for movement, and tracks high
          scores. Also allows for muiltiplayer by using websockets (coming
          soon).
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Learn the basics of game development by implementating a game loop,
            and separating this from the renderer.
          </li>
          <li>Use websockets for fast transmission of data.</li>
        </ul>
      </>
    ),
    link: "google.com",
    tags: ["canvas", "game", "fun", "solo project", "web sockets"],
  },
  {
    title: "Drawing Tool",
    image: "/images/projects/draw.gif",
    description: (
      <>
        <p>
          Using canvas to create a simple tool to doodle. Brush colour and size
          is randomised.
        </p>
        <p>
          Implemented using canvas again. The brush and the paint are on
          separate canvases which allows for much better performance.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Understanding rendering on canvas and how we can separate components
            apart.
          </li>
        </ul>
      </>
    ),
    link: "google.com",
    tags: ["canvas", "fun", "solo project"],
  },
  {
    title: "Expanding Shapes",
    image: "/images/projects/shapes.gif",
    description: (
      <>
        <p>
          Every click on the canvas triggers a random regualr polygon of a
          random size, with a random easing from a predefined set of easing
          functions, of a random colour.
        </p>
        <p>
          Implemented using canvas and ensures that the shapes will always be
          within the bounds of the canvas and never overlap outside.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>Learn how I could optimise canvas applications.</li>
          <li>
            Implement the necessary maths to calculate the possible size of the
            shapes without overlapping the border.
          </li>
          <li>Implement custom easing functions.</li>
        </ul>
      </>
    ),
    link: "google.com",
    tags: ["canvas", "fun", "solo project"],
  },
  {
    title: "Simulating the Solar System",
    image: "/images/projects/space.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          Used threejs to render a 3D model of the solar system. It is not
          visually to scale, but implements a good enough approximation of
          gravity between bodies. The implementation allows the user to move the
          camera around freely to observe.
        </p>
        {/* Libraries used */}
        <p>
          Threejs to render, and cannon-es to simulate the physics system.
          Cannon-es had no in built force of gravity so I created a custom force
          that calculates the force exerted between two bodies.
        </p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>Render a 3D system with lighting effects.</li>
          <li>
            Simulate spherical bodies in a system where gravity is the only
            force exerted.
          </li>
          <li>
            Experiment with time scales and other simulation related variables.
          </li>
        </ul>
      </>
    ),
    link: "google.com",
    tags: ["cannon-es", "three-js", "fun", "solo project", "3D"],
  },
  {
    title: "Space Pool",
    image: "/images/projects/pool.gif",
    description: (
      <>
        {/* Descibe project */}
        <p>
          Continuing my experimentation of 3D systems and spherical bodies, this
          project is a very simple implementation of balls on a surface. There
          is friction, lighting and the user can interact with the bodies by
          clicking them. Collisions are simulated accurately using cannon-es
          again.
        </p>
        {/* Libraries used */}
        <p>
          Just like the solar system simulation, this uses threejs for the
          rendering and cannon-es for the physcis simulation.
        </p>
        {/* Things learned */}
        <p>This project helped me to:</p>
        <ul>
          <li>
            Understand cameras and perspective when working in a 3D system.
          </li>
          <li>
            Apply a force in a system based on mouse position and camera
            perspective.
          </li>
        </ul>
      </>
    ),
    link: "google.com",
    tags: ["cannon-es", "three-js", "fun", "solo project", "3D"],
  },
];
