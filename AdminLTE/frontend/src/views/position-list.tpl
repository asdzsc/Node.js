{{each data}}
<tr>

    <td>{{$index+1}}</td>
    <!-- <td>{{$value.componyLogo}}</td> -->
    <td><img src="https://www.lgstatic.com/i/image2/M01/8B/9A/CgotOV15uyKAMCL3AAAvAzXIrFw812.png" width="50" height="50" alt=""></td>
    <td>{{$value.componyName}}</td>
    <td>{{$value.positionName}}</td>
    <td>{{$value.city}}</td>
    <td>{{$value.salary}}</td>
    <td>{{$value.createTime}}</td>
    <td>
        <button data-id="{{$value._id}}" type="button" class="btn btn-primary update-position">修改</button>
        <button data-id="{{$value._id}}" type="button" class="btn btn-danger del-position">删除</button>
    </td>
</tr>
{{/each}}