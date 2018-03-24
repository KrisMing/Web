var Max = 65535;
var vex=15;
var P=new Array(vex);
for(i=0;i<vex;i++)
{
    P[i]=new Array(vex);
}
var d=new Array(vex);
for(i=0;i<vex;i++)
{
    d[i]=new Array(vex);
}
function Dijkstra(){
    var v,w,i,j,min;
    var G=[[Max,3,4,5,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,6,6,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,8,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,3,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,6,5,10,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,4,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,2,4,6,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,7,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,2,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,4,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,3],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
           [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max]]; 
    var g=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];   
    var final=new Array(vex);
    var D=new Array(vex);
    for(v = 0;v<vex;v++)
    {
        final[v] = 0;
        D[v] = G[0][v];
        for(w=0;w<vex;w++)
        {
            P[v][w]=-1;
        }
        if(D[v]<65535)
        {
            P[v][0] = 0;
            P[v][1]=v;
        }
    }
    D[0] = 0;
    final[0] = 1;
    for(i=1;i<vex;i++)
    {
        min = 65535;
        for(w=0;w<vex;w++)
            if(final[w]== 0 && D[w]<min)
            {
                v=w;
                min = D[w];
            }
            final[v]=1;
            for(w=0;w<vex;w++)
             {
                if(final[w]== 0 && min<65535 && G[v][w]<65535 && (min+G[v][w]<D[w]))
                {
                    D[w]=min+G[v][w];
                    for(j=0;j<vex;j++)
                    {
                        P[w][j]=P[v][j];
                        if(P[w][j]==-1)
                        {
                            P[w][j]=w;
                            break;
                        }
                    }
                }
            }
    }
}
var p=new Array(vex);
for(i=0;i<vex;i++)
{
    p[i]=new Array(vex);
}
for(i=0;i<vex;i++)
{
    for(j=0;j<vex;j++)
    {
        p[i][j]=new Array(vex);
    }
}
function Floyd(){
    var u,v,w,i,j;
    var G=[[Max,3,4,5,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,6,6,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,8,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,3,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,6,5,10,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,4,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,2,4,6,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,7,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,2,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,4,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,3],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max],
    [Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max,Max]];
    var D=new Array(vex);
    for(i=0;i<vex;i++)
    {
        d[i]=new Array(vex);
    }
    for(i=0;i<vex;i++)
    {
        for(j=0;j<vex;j++)
            d[i][j]=new Array(vex);
    }
    for(v=0;v<vex;v++)
        for(w=0;w<vex;w++)
        {
            d[v][w]=G[v][w];
            for(u=0;u<vex;u++)
                p[v][w][u]=-1;
            if(d[v][w]<Max)
            {
                p[v][w][0]=v;
                p[v][w][1]=w;
            }
        }
        for(u=0;u<vex;u++)
            for(v=0;v<vex;v++)
                for(w=0;w<vex;w++)
                    if(d[v][u]<Max && d[u][w]<Max && d[v][u]+d[u][w]<d[v][w])
                    {
                        d[v][w]=d[v][u]+d[u][w];
                        for(i=0;i<vex;i++)
                        {
                            if(p[v][u][i]!=-1)
                                p[v][w][i]=p[v][u][i];
                            else
                                break;
                        }
                        for(j=1;j<vex;j++)
                        {
                            if(p[u][w][j]!=1)
                                p[v][w][i++]=p[u][w][j];
                            else
                                break;
                        }
                    }
}
var a=new Array(100);
a[3]=document.getElementById("L1");
a[4]=document.getElementById("L2");
a[5]=document.getElementById("L3");
a[9]=document.getElementById("L4");
a[7]=document.getElementById("L5");
a[10]=document.getElementById("L6");
a[8]=document.getElementById("L7");
a[13]=document.getElementById("L8");
a[15]=document.getElementById("L9");
a[18]=document.getElementById("L10");
a[14]=document.getElementById("L11");
a[19]=document.getElementById("L12");
a[99]=document.getElementById("L13");
a[24]=document.getElementById("L14");
a[28]=document.getElementById("L15");
a[20]=document.getElementById("L16");
a[22]=document.getElementById("L17");
a[26]=document.getElementById("L18");
a[3].style.visibility="hidden";
a[4].style.visibility="hidden";
a[5].style.visibility="hidden";
a[9].style.visibility="hidden";
a[7].style.visibility="hidden";
a[10].style.visibility="hidden";
a[8].style.visibility="hidden";
a[13].style.visibility="hidden";
a[15].style.visibility="hidden";
a[18].style.visibility="hidden";
a[14].style.visibility="hidden";
a[19].style.visibility="hidden";
a[99].style.visibility="hidden";
a[24].style.visibility="hidden";
a[28].style.visibility="hidden";
a[20].style.visibility="hidden";
a[22].style.visibility="hidden";
a[26].style.visibility="hidden";
function Lujin(){
    var i=0;
    var n=document.getElementById("first");
    Dijkstra();
    while(P[n.value-1][i+1] >-1 )
    {
        num=0;
        num=P[n.value-1][i]+P[n.value-1][i+1]+2;
        a[num].style.visibility="visible";
        i++;

    }
}
function Lujin2(){
    Floyd();
    var k=0;
    var i=document.getElementById("start");
    var j=document.getElementById("end");
    if(i.value-1!=j.value-1)
    {
        if(d[i.value-1][j.value-1]!=Max)
        {
            while(p[i.value-1][j.value-1][k+1]>-1)
            {
                num=0;
                num=p[i.value-1][j.value-1][k]+p[i.value-1][j.value-1][k+1]+2;
                a[num].style.visibility="visible";
                k++
            }
        }
    }
}

