<ul class="pagination pagination-sm no-margin pull-right" id="users-page-list">
    <li><a href="#">&laquo;</a></li>
    {{each pageArr}}
    <li><a href="#">{{$index+1}}</a></li>
    {{/each}}
    <li><a href="#">&raquo;</a></li>
</ul>