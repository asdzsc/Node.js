{{each data}}
<tr>
    <td>{{$index+1}}</td>
    <td>{{$value.username}}</td>
    <td> <button data-id="{{$value._id}}" type="button" class="btn btn-danger del-user">删除</button></td>
</tr>
{{/each}}