%%


counter = 3;
center1 = [2 3];
for c= 1:counter

    x = [1 3 3 1 1]; 
    y = [2 2 9 9 2]; 
    
    plot(x, y);
    fill(x,y, 'k');
    axis([0 10 0 10]);
    hold on
    
    radius1 = 0.5;
    theta1 = linspace(0, 2*pi, 100);
    xCircle1 = center1(1) + radius1 * cos(theta1);
    yCircle1 = center1(2) + radius1 * sin(theta1);
    plot (xCircle1,yCircle1);
    if c == 1
        fill(xCircle1,yCircle1,'g');
    elseif c == 2
        fill(xCircle1,yCircle1,'y'); 
    else
        fill(xCircle1,yCircle1,'r'); 
    end
    hold on;
    
    center1(2)=center1(2)+2.5;
    pause(2);
    cla;
end

