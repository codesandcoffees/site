# Landing Page

![open issues](https://img.shields.io/github/issues/codesandcoffees/landing-page-wip.svg)
![open prs](https://img.shields.io/github/issues-pr/codesandcoffees/landing-page-wip.svg)
![code size](https://img.shields.io/github/languages/code-size/codesandcoffees/landing-page-wip.svg)
![contributors](https://img.shields.io/github/contributors/codesandcoffees/landing-page-wip.svg)

# Gettig Started

## Linux
1. Install
```
sudo apt-get install ruby ruby-dev build-essential
```

2. Gem installation directory on user account
```
echo '# Install Ruby Gems to ~/gems' >> ~/.zshrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.zshrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```
3. Install Jekyll
```
gem install jekyll bundler
```
More [here](https://jekyllrb.com/docs/installation/#ubuntu)

4. Install stuff
```
# cd into the directory and install
bundle install
```

# Development
Run `bundle exec jekyll serve` to run<br/>
