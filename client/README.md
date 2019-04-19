# Client guide

# How to use
<code>npm install</code>
<br >
<code>npm start</code>


# Troubleshooting

If problems with corrupted library do this: 
<br >
<code>rm -rf node_modules package-lock.json && npm cache clean --force && npm install</code>

If you get ENOSPC error try this:
<br >
<code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p</code>