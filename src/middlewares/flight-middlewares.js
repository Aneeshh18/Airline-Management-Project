const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // If any of the required properties is missing, return a bad request response
        return res.status(409).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    // If all required properties are present, continue to the next middleware or route handler
    next();
}

module.exports = {
    validateCreateFlight
}
