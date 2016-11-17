<template>
  <div>
    <md-card>
      <md-card-media>
        <img src="http://media.virbcdn.com/images/ff/6fc88503f7cd8fae-orig_rooster_header_image.jpg" />
      </md-card-media>
      <md-card-header>
        <div class="md-title">Users</div>
      </md-card-header>
      <md-card-content>
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head md-sort-by="status">Status</md-table-head>
              <md-table-head md-sort-by="name">Name</md-table-head>
            </md-table-row>
          </md-table-header>

          <md-table-body>
            <md-table-row v-for="(row, index) in 5" :key="index">
              <md-table-cell>Status{{index}}</md-table-cell>
              <md-table-cell>Name{{index}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
  export default {
    name: 'user-page',
  }
</script>
