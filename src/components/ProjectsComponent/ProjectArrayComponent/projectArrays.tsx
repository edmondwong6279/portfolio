import { projectType } from "types";

const tags = {
  framer: "Framer Motion",
  svg: "SVG",
  team: "Team Project",
  work: "Work Project",
  python: "Python",
  ML: "Machine Learning",
  node: "Node.js",
  next: "Next.js",
  solo: "Solo Project",
  datavis: "Data Visualisation",
  canvas: "Canvas",
  matter: "Matter.js",
  d3: "D3.js",
  sql: "SQL",
  postgresql: "PostgreSQL",
  personal: "Personal Project",
  game: "Game",
  fun: "Fun",
  ws: "Web Sockets",
  fetch: "Fetch API",
  cannon: "cannon-es",
  three: "three-js",
  "3d": "3D",
};

export const projectsArray: projectType[] = [
  {
    title: "xenonarc",
    image: `/images/projects/xenon.mp4`,
    description: (
      <>
        <p>
          Worked in a team to build the xenonarc website. My responsibilities
          were animating the background and logo on the front page. As the
          project moved on, I contributed further by bug fixing.
        </p>
        <p>The background and logo were animated using framer on SVGs.</p>
        <p>This project helped me to:</p>
        <ul>
          <li>Gain experience in working in a team with a large client.</li>
          <li>
            Produce code that was being delivered on a real client project.
          </li>
        </ul>
      </>
    ),
    projectLink: "https://xenonarc.com/",
    tags: [tags.framer, tags.svg, tags.team, tags.work],
  },
  {
    title: "Shoe Generator",
    image: `/images/projects/shoes.mp4`,
    description: (
      <>
        <p>
          This passion project utilised my knowledge in machine learning to
          produce an image generator for shoes. The implementation gives the
          user the options to refine strange and wonderful designs, all in a
          simple and clear UI.
        </p>
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
        <p>This project helped me to:</p>
        <ul>
          <li>
            Deploy a pretrained machine learning model on a nextjs project.
          </li>
          <li>Embed data that is used to generate each shoe.</li>
        </ul>
      </>
    ),
    // projectLink: "https://shoegen.universlabs.co.uk/",
    tags: [
      tags.python,
      tags.ML,
      tags.node,
      tags.next,
      tags.framer,
      tags.solo,
      tags.work,
    ],
  },
  {
    title: "Balderton Benchmark Tool",
    image: `/images/projects/bald.mp4`,
    description: (
      <>
        <p>
          This project fetches predefined data and displays it in either a box
          plot, line graph or a bar chart. Furthermore, users can check their
          own statistics against this predefined data. This comparison is
          displayed in a custom box plot.
        </p>
        <p>
          The graphs were implemented using SVG and animated using framer
          motion.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Create a fluid experience with data visualisation that seamlessly
            switches between graph types.
          </li>
          <li>
            Create a custom slider component that allows for a pleasant and
            intuitive UX.
          </li>
          <li>
            Collaborated with another developer to produce a clean
            implementation of this data visualisation project.
          </li>
        </ul>
      </>
    ),
    tags: [tags.datavis, tags.svg, tags.team, tags.work],
  },
  {
    title: "Rhinostics ROI Calculator",
    image: `/images/projects/rhino.mp4`,
    description: (
      <>
        <p>
          In this project, the user inputs information in a form and receives a
          custom page based on their answers.
        </p>
        <p>
          This was a fairly basic project that helped me to work to a simple
          design but achieve the closest result to the design.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Work efficiently and quickly on the project in a relatively small
            time scale.
          </li>
        </ul>
      </>
    ),
    projectLink: "https://rhinostics.com/roi/",
    tags: [tags.datavis, tags.team, tags.work],
  },
  {
    title: "Let The Words Out",
    image: `/images/projects/ltwo.mp4`,
    description: (
      <>
        <p>
          Worked with a local band to create a promotional webpage. The user
          types and submits a phrase, then an animation of any matching words
          with their corresponding number of submissions is displayed in a
          floating circle on a canvas element.
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
            Utilise matter-js to simulate the physics of the bubbles and render
            them with canvas.
          </li>
          <li>
            Learn how to use Knex to connect to a PostgreSQL database and
            perform simple transactions.
          </li>
        </ul>
      </>
    ),
    projectLink: "https://letthewordsout.com/",
    tags: [
      tags.canvas,
      tags.matter,
      tags.d3,
      tags.sql,
      tags.postgresql,
      tags.solo,
      tags.personal,
    ],
  },
  {
    title: "Bacon Snakes",
    image: `/images/projects/snake.mp4`,
    description: (
      <>
        <p>
          Recreated the simple game of snake- but with bacon. Nothing serious,
          just a bit of fun!
        </p>
        <p>
          Uses keyboard input for movement, and tracks high scores. Also allows
          for multiplayer by using websockets (coming soon). This project will
          be public soon.
        </p>
        <p>This project helped me to:</p>
        <ul>
          <li>
            Learn the basics of game development by implementing a game loop,
            and separating this from the renderer.
          </li>
          <li>Use websockets for fast transmission of data.</li>
        </ul>
      </>
    ),
    // projectLink: "google.com",
    // gitprojectLink: "https://github.com/edmondwong6279/bacon-snakes",
    tags: [tags.canvas, tags.game, tags.fun, tags.solo, tags.ws, tags.personal],
  },
  {
    title: "Covid Data Visualisation",
    image: `/images/projects/covid.mp4`,
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
          <li>Learn to scrape data from csv files using fetch.</li>
          <li>
            Use d3 (specifically d3-scale) to calculate mouse positions to allow
            for the hover tooltip.
          </li>
          <li>
            Make a simple loading animation while data was fetched and
            processed.
          </li>
          <li>Use framer motion to load the line plot in and out.</li>
        </ul>
      </>
    ),
    projectLink: "https://covid-data-vis.vercel.app/",
    gitprojectLink: "https://github.com/edmondwong6279/covid-data-vis",
    tags: [
      tags.d3,
      tags.fetch,
      tags.svg,
      tags.framer,
      tags.datavis,
      tags.solo,
      tags.personal,
    ],
  },
  {
    title: "Simulating the Solar System",
    image: `/images/projects/space.mp4`,
    description: (
      <>
        <p>
          Used threejs to render a 3D model of the solar system. It is not
          visually to scale, but implements a good enough approximation of
          gravity between bodies. The implementation allows the user to move the
          camera around freely to observe.
        </p>
        <p>
          Threejs was used to render, and cannon-es to simulate the physics
          system. Cannon-es has no preexisting function for the force of gravity
          so I created a custom function that calculates the gravitational force
          exerted between two bodies.
        </p>
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
    projectLink: "https://solar-system-simulator.vercel.app/",
    gitprojectLink: "https://github.com/edmondwong6279/solar-system-simulator",
    tags: [
      tags.cannon,
      tags.three,
      tags.fun,
      tags.solo,
      tags["3d"],
      tags.personal,
    ],
  },
  {
    title: "Drawing Tool",
    image: `/images/projects/draw.mp4`,
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
            Understand rendering on canvas and how we can separate components
            apart.
          </li>
        </ul>
      </>
    ),
    projectLink: "https://drawing-tool-ew.vercel.app/",
    gitprojectLink: "https://github.com/edmondwong6279/drawing-tool",
    tags: ["canvas", "fun", "solo project", "personal project"],
  },
  {
    title: "Expanding Shapes",
    image: `/images/projects/shapes.mp4`,
    description: (
      <>
        <p>
          The user clicks on the screen which triggers a shape to be rendered at
          that position, expanding from a point. The shape randomises the number
          of sides on the regular polygon, the type of easing function, the
          duration (between set bounds), colour and opacity.
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
    projectLink: "https://expanding-shapes.vercel.app/",
    gitprojectLink: "https://github.com/edmondwong6279/expanding-shapes",
    tags: [tags.canvas, tags.fun, tags.solo, tags.personal],
  },
  {
    title: "Space Pool",
    image: `/images/projects/pool.mp4`,
    description: (
      <>
        <p>
          Continuing my experimentation of 3D systems and spherical bodies, this
          project is a very simple implementation of balls on a surface. There
          is friction, lighting and the user can interact with the bodies by
          clicking them. Collisions are simulated accurately using cannon-es
          again.
        </p>
        <p>
          Just like the solar system simulation, this uses threejs for the
          rendering and cannon-es for the physics simulation.
        </p>
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
    projectLink: "https://space-pool.vercel.app/",
    gitprojectLink: "https://github.com/edmondwong6279/space-pool",
    tags: [
      tags.cannon,
      tags.three,
      tags.fun,
      tags.solo,
      tags["3d"],
      tags.personal,
    ],
  },
];
