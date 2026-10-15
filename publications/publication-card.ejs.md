```{=html}
<ul class="publication-grid list">
<% for (const item of items) { %>
  <li class="publication-card" <%= metadataAttrs(item) %>>
    <div class="publication-card__image"><img src="<%- item.image %>" alt="<%- item['image-alt'] || '' %>" loading="lazy"></div>
    <div class="publication-card__body">
      <div class="publication-card__meta"><span class="listing-status"><%- item.status %></span></div>
      <h2><a class="listing-title" href="<%- item.path %>"><%- item.title %></a></h2>
      <p class="listing-author"><%- item.author %></p>
      <p class="listing-subtitle"><%- item.subtitle %></p>
      <p class="listing-description"><%- item.description || '' %></p>
      <% if (item['publication-links'] && item['publication-links'].length) { %>
      <div class="publication-card__links">
        <% for (const resource of item['publication-links']) { %>
          <a href="<%- resource.url %>"><%- resource.label %> ↗</a>
        <% } %>
      </div>
      <% } %>
    </div>
  </li>
<% } %>
</ul>
```
