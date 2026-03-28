# oit_trivia_trek
Trivia Trek Coding Challenge

## Usage

1. To begin, clone this repository to your computer:

```bash
git clone https://github.com/Jtoosh/oit_trivia_trek.git
```

2. Move your working directory into the repository, and then run `npm install` to install dependencies:

```bash
cd oit_trivia_trek
npm install
```

3. Run `npm run build` to compile the Typescript files

```bash
npm run build
```

4. Run `npm start` to launch Vite to serve the frontend. 

```bash
npm start
```

5. Press `o` after the command begins running to display the website.

## Disclosure of Tools Used

This challenge was approached as if it were a work responsibility where access to external resources like documentation, Stack Overflow, and AI tools are available. The majority of code was user written, with the exception of `TriviaContext.tsx`. The AI CLI tool Opencode was used to assist with this part of the application to maximize output in the time contraints.

Overview of Tools used:
- Node.js and `npm` for runtime engine and package manager
- Biome.js for linting and formatting
- Vite for frontend bundling and building
- Typescript and React for frontend code
- Shadcn/ui library for react components and styling

## Next Steps

With more time, I would add the following features: 
- Finish question displaying
- Add the game logic for scoring and tracking the total score.
- Add a replay button that sends another API call
- Improve some of the styling and UI