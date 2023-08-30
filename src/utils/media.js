const breakpoints = {
    xsmall: 420,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
};

const createQuery = (format, points = breakpoints) => {
    const query = {};
    Object.keys(points).forEach((breakpoint) => {
        query[breakpoint] = `@media (${format}-width: ${points[breakpoint]}px)`;
    });
    return query;
};

export const mediaMax = createQuery('max', breakpoints);
export const mediaMin = createQuery('min', breakpoints);
