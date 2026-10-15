```{=html}
<% const featured = items.find(item => item.featured); %>
<% if (featured) { %>
<article class="talk-featured">
  <div class="talk-featured__content">
    <span class="talk-featured__eyebrow">Featured presentation · <%- featured.year %></span>
    <h2><a href="<%- featured.path %>"><%- featured.title %></a></h2>
    <p><%- featured.description || '' %></p>
    <a class="talk-featured__link" href="<%- featured.path %>">Explore the presentation ↗</a>
  </div>
  <% if (featured['talk-cover']) { %><img src="<%- featured['talk-cover'] %>" alt="<%- featured['talk-cover-alt'] || 'Presentation cover' %>" loading="lazy"><% } %>
</article>
<% } %>
<ul class="talk-list">
<% for (const item of items) { %>
  <li class="talk-row" data-talk-type="<%- item['talk-type'] %>" data-talk-year="<%- item.year %>">
    <div class="talk-row__date"><span><%- item.year %></span><% if (item.date) { %><time datetime="<%- item.date %>"><%- item.date %></time><% } %></div>
    <div class="talk-row__main">
      <h2><a href="<%- item.path %>"><%- item.title %></a></h2>
      <% if (item.subtitle && item.subtitle !== item.event) { %><p class="talk-row__subtitle"><%- item.subtitle %></p><% } %>
      <p class="talk-row__context"><%- item.event || '' %><% if (item.location) { %> · <%- item.location %><% } %></p>
      <% if (item['talk-links'] && item['talk-links'].length) { %>
        <div class="talk-row__links"><% for (const link of item['talk-links']) { %><a href="<%- link.url %>"><%- link.label %> ↗</a><% } %></div>
      <% } %>
    </div>
    <span class="talk-row__type"><%- item['talk-type'] %></span>
  </li>
<% } %>
</ul>
```
