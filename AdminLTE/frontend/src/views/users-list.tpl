{{each data}}
<tr>
    <td>{{$index+1}}</td>
    <td>{{$value.username}}</td>
    <td> <button type="button" class="btn btn-danger">删除</button></td>
</tr>
{{/each}}