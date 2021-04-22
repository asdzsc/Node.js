<ul class="pagination pagination-sm no-margin pull-right" id="users-page-list">
    <li><a href="javascript:;">&laquo;</a></li>
    {{each pageArr}}
    <li><a href="javascript:;">{{$index+1}}</a></li>
    {{/each}}
    <li><a href="javascript:;">&raquo;</a></li>
</ul>