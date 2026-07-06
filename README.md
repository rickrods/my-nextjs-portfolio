# My Portfolio Application

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fyour-repo-name&env=GH_TOKEN,VC_TOKEN)

A personal portfolio website built with the latest versions of [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and deployed to [Vercel](https://vercel.com/). It automatically pulls your GitHub repositories, deployment details, and profile information into a polished landing page.

## 🧰 Tech stack
- **Framework**: [Next.js](https://nextjs.org/) 16.2.10
- **Runtime**: [Node.js](https://nodejs.org/) 24.x
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.3.1
- **UI**: [React](https://react.dev/) 19.2.7
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) 5.7.0


## ⭐ Features
- Displays your GitHub profile, organizations, and repositories
- Shows project stats, traffic data, and security alerts when available
- Includes Vercel deployment information and framework detection
- Supports a simple search experience for browsing other GitHub users

## 💻 Running locally

1. Clone the repository and navigate into the directory:

```sh
git clone https://github.com/rickrods/My-Portfolio-App.git
cd My-Portfolio-App
```

Add your tokens to [.env.local](.env.local):

```sh
# Required for build-time GitHub data requests
GH_TOKEN=YOUR_GH_TOKEN

# Optional for Vercel deployment information
VC_TOKEN=YOUR_VERCEL_TOKEN
```

`GH_TOKEN` is required for the app to build and run successfully.

#### 📝 Configure the app
Configure github settings for the application in [data.json](data.json) 
- The `projects` section allows you to feature certain repositories and hide others from your portfolio.
- Use `heroNames` to list repositories you want to feature, and `blacklist` to list repositories you want to hide.

```json
{
	"description": "Description of the project github account or organization",
	"githubUsername": "github-username",
	"avatarUrl": "Right click on your github avatar and copy url to retrieve",
	"displayName": "Name to be displayed in the portfolio",
	"email": "Email address to display in the portfolio",
	"projects": {
		"blacklist": [],
		"heroNames": []
	}
}
```

#### ▶️ Run the app
Then install dependencies and start the development server:

```sh
npm install
npm run dev
```

## 🚀 Deploying to Vercel

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Add the same environment variables in the Vercel project settings.
4. Deploy.
